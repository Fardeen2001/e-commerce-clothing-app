"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const isLoggedInToken = useSelector((state) => state.auth.token);
  const route = useRouter();
  const [allOrders, setAllOrders] = useState([]);
  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      if (!res.ok) {
        throw new Error("orders not found");
      }
      const data = await res.json();
      setAllOrders(data.orders);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!isLoggedInToken) {
      route.push("/");
    } else {
      fetchOrders();
    }
  }, [isLoggedInToken]);
  return (
    <div className="container w-[80vw] mx-auto">
      <h1 className="font-semibold text-center text-2xl p-8">My Orders</h1>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #Order Id
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Items
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Total Amount
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allOrders?.map((item) => (
                    <tr
                      key={item._id}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        #{item?.orderId}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item?.products.length}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item?.amount}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Link href={`/orders/${item?._id}`}>See Details</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
