"use client";
import Image from "next/image";
import React from "react";
import logo from "../public/clothtext logo.png";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import SideBarCart from "./SideBarCart";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartActions } from "@/ReduxStore/openCart";

const NavBar = ({ user }) => {
  const dispatch = useDispatch();
  const toggleCart = useSelector((state) => state.toggleCart.isCartOpen);
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
        {user.value && <MdAccountCircle className="text-xl md:text-4xl mx-2" />}
        <Link href={"/login"}>
          {" "}
          <button>Login</button>
        </Link>
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
