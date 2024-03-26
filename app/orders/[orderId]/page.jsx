"use client";
import Image from "next/image";
import pic from "@/public/hoodie.webp";
import { useEffect } from "react";
import { useState } from "react";

const ProductOrder = ({ params }) => {
  const [orderDetails, setOrderDetails] = useState();

  const orderId = params.orderId;
  const fetchOrderData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/orders/${orderId}`,
        {
          next: { revalidate: 0 },
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error("invaild Data");
      }
      const data = await res.json();
      setOrderDetails(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchOrderData();
  }, []);

  return (
    orderDetails && (
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Clothwear.com
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Order Id : #{orderDetails?.orders?.orderId}
              </h1>

              <p className="leading-relaxed mb-4">Order Placed Successfully!</p>
              <div className=" w-full mx-auto overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        Item Description
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Quantity
                      </th>

                      <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Item Total
                      </th>
                      <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetails?.orders?.products.map((order) => (
                      <tr key={order.itemCode}>
                        <td className="px-4 py-3">
                          {order?.name}({order?.size}/{order?.varient})
                        </td>
                        <td className="px-4 py-3">{order.qty}</td>
                        <td className="px-2 py-3">{order.totalPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex my-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Rs {orderDetails?.orders?.amount}
                </span>
                <button className="flex ml-auto   text-black bg-slate-200 hover:bg-stone-600 hover:text-white border-0 py-2 px-6 focus:outline-none rounded">
                  Track Order
                </button>
              </div>
            </div>
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={pic}
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
    )
  );
};

export default ProductOrder;
