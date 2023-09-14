import { cartActions } from "@/ReduxStore/cart";
import { toggleCartActions } from "@/ReduxStore/openCart";
import Link from "next/link";
import React from "react";
import {
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const SideBarCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();
  const clearHandler = () => {
    dispatch(cartActions.clearCart());
  };
  const AddQuantityHandler = (id) => {
    dispatch(cartActions.addToCart({ itemCode: id, price: 599 }));
  };
  const removeQuantityHandler = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <div className="w-72 h-[100vh] sideBarCart absolute top-0 right-0 bg-zinc-900 px-8 py-10 text-white">
      <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
      <span
        onClick={() => {
          dispatch(toggleCartActions.togleCart());
        }}
        className="absolute top-2 right-2 cursor-pointer text-2xl"
      >
        <AiOutlineClose />
      </span>
      <ol className="list-decimal font-semibold">
        {cartItems.length === 0 && (
          <div className="my-4 font-semibold">Your Cart is Empty!</div>
        )}
        {cartItems &&
          cartItems.map((item) => (
            <li key={item.itemCode}>
              <div className="item flex my-3">
                <div className="w-2/3 font-semibold">
                  {item.name} ({item.size},{item.varient})
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
                      AddQuantityHandler(item.itemCode);
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
      </ol>
      <div className="text-bold my-2">Subtotal : ₹ {total}</div>
      <div className="flex">
        <Link href={"/checkout"}>
          <button className="flex  mr-2 text-black bg-slate-200 border-0 p-2 focus:outline-none hover:bg-stone-600 hover:text-white rounded text-sm">
            <BsBagCheckFill className="m-0.5" /> Checkout
          </button>
        </Link>
        <button
          onClick={clearHandler}
          className="flex  mr-2 text-black bg-slate-200 border-0 p-2 focus:outline-none hover:bg-stone-600 hover:text-white rounded text-sm"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default SideBarCart;
