"use client";
import { cartActions } from "@/ReduxStore/cart";
import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  // const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalAmount);
  const AddQuantityHandler = (id, price) => {
    dispatch(cartActions.addToCart({ itemCode: id, price: price }));
  };
  const removeQuantityHandler = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };
  const initiatePayment = async () => {
    const oid = Math.floor(Math.random() * Date.now());
    const userData = {
      cartItems,
      total,
      oid,
      name,
      email,
      address,
      phone,
      pincode,
    };
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        next: { revalidate: 0 },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();

        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_HOST}/api/postCheckout`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ TRX_ID: data.TRX_ID, orderId: data.oid }),
              next: { revalidate: 0 },
              cache: "no-store",
            }
          );
          if (!response.ok) {
            throw new Error(response.error);
          }
          if (response.ok) {
            const postCheckData = await response.json();
            console.log(postCheckData);
          }
        } catch (error) {
          console.error(error);
        }
      }

      if (!res.ok) {
        throw new Error(res.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (name && email && address && phone && city && state && pincode) {
      if (cartItems.length > 0 && total > 1) {
        initiatePayment();
      } else {
        toast.error("Add items to cart", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };
  return (
    <div className="container w-[70vw] m-auto">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <form onSubmit={(e) => handelSubmit(e)}>
        <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>{" "}
        <h2 className="text-xl font-bold">Delivery Details</h2>
        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            {" "}
            <div className=" mb-2">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className=" mb-2">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="px-2 w-full">
          <div className=" mb-2">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Address
            </label>
            <textarea
              name="address"
              id="address"
              cols="30"
              rows="2"
              required
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
            {" "}
            <div className=" mb-2">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="number"
                id="Phone"
                name="Phone"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className=" mb-2">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-600"
              >
                Pincode
              </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                required
                value={pincode}
                onChange={(e) => {
                  setPincode(e.target.value);
                }}
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
            {" "}
            <div className="mb-2">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className=" mb-2">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                required
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold">Cart review</h2>
        <ol className="list-decimal font-semibold px-5">
          {cartItems.length === 0 && (
            <div className="my-4 font-semibold">Your Cart is Empty!</div>
          )}
          {cartItems &&
            cartItems.map((item) => (
              <li key={item.itemCode}>
                <div className="item flex my-3">
                  <div className="w-full md:w-2/6 font-semibold text-sm md:text-base">
                    {item.name} ({item.size},{item.varient})
                  </div>
                  <div className="w-full md:w-2/12 font-semibold text-sm md:text-base">
                    ₹ {item.totalPrice}
                  </div>
                  <div className="w-2/1 flex items-center justify-center text-lg">
                    <AiOutlineMinusCircle
                      className="cursor-pointer"
                      onClick={() => {
                        removeQuantityHandler(item.itemCode);
                      }}
                    />{" "}
                    <span className="mx-2 text-sm">{item.qty}</span>
                    <AiOutlinePlusCircle
                      className="cursor-pointer"
                      onClick={() => {
                        AddQuantityHandler(item.itemCode, item.price);
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
        </ol>
        <div className="font-bold">SubTotal : ₹ {total}</div>
        <button
          type="submit"
          className="flex  m-2 text-black bg-slate-200 border-0 p-2 focus:outline-none hover:bg-stone-600 hover:text-white rounded text-sm"
        >
          Pay ₹ {total}
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
