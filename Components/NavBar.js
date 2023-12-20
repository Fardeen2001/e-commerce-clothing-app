"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/clothtext logo.png";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import SideBarCart from "./SideBarCart";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartActions } from "@/ReduxStore/openCart";
import { authSliceAction } from "@/ReduxStore/auth";

const NavBar = () => {
  const dispatch = useDispatch();
  const toggleCart = useSelector((state) => state.toggleCart.isCartOpen);
  const user = useSelector((state) => state.auth.token);
  const [dropdown, setDropdown] = useState(false);
  const toggleCartHandler = () => {
    dispatch(toggleCartActions.togleCart());
  };

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center py-2 shadow-xl sticky top-0 z-10 bg-white">
      <div className="logo">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={40}
            className="mx-5"
          />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex space-x-4 font-bold text-md">
          <Link href={"/tshirts"}>
            <li className="hover:text-gray-500">Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li className="hover:text-gray-500">Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li className="hover:text-gray-500">Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            {" "}
            <li className="hover:text-gray-500">Mugs</li>
          </Link>
        </ul>
      </div>
      <div className="cart flex absolute right-0 top-4 mx-5 cursor-pointer">
        {dropdown && user && (
          <div
            onMouseOver={() => {
              setDropdown(true);
            }}
            onMouseLeave={() => {
              setDropdown(false);
            }}
            className="absolute right-9 top-5 md:right-16 md:top-8 py-2 px-5 w-36 bg-zinc-900 text-white rounded-md"
          >
            <ul>
              <Link href={"/profile"}>
                {" "}
                <li className="py-1 hover:text-gray-400">Profile</li>
              </Link>
              <Link href={"/orders"}>
                <li className="py-1 hover:text-gray-400">Orders</li>
              </Link>
              <button
                onClick={() => {
                  dispatch(authSliceAction.logout());
                }}
              >
                <li className="py-1 hover:text-gray-400">Logout</li>
              </button>
            </ul>
          </div>
        )}
        {user && (
          <MdAccountCircle
            onMouseOver={() => {
              setDropdown(true);
            }}
            onMouseLeave={() => {
              setDropdown(false);
            }}
            className="text-xl md:text-4xl mx-2"
          />
        )}
        {!user && (
          <Link href={"/login"}>
            {" "}
            <button className="bg-slate-200 p-2 mx-2 rounded-xl font-bold hover:text-slate-50 hover:bg-slate-800">
              Login
            </button>
          </Link>
        )}
        <AiOutlineShoppingCart
          onClick={toggleCartHandler}
          className="text-xl md:text-4xl"
        />
      </div>

      {toggleCart && <SideBarCart />}
    </div>
  );
};

export default NavBar;
