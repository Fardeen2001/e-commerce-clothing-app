"use client";
import Image from "next/image";
import React, { useRef } from "react";
import logo from "../public/clothtext logo.png";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SideBarCart from "./SideBarCart";

const NavBar = () => {
  const ref = useRef(null);
  const toggleCart = () => {
    if (ref.current) {
      if (ref.current.classList.contains("translate-x-full")) {
        ref.current.classList.remove("translate-x-full");
        ref.current.classList.add("translate-x-0");
      } else if (!ref.current.classList.contains("translate-x-full")) {
        ref.current.classList.remove("translate-x-0");
        ref.current.classList.add("translate-x-full");
      }
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center py-2 shadow-xl">
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
            <li>Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            {" "}
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className="cart absolute right-0 top-4 mx-5 cursor-pointer"
      >
        <AiOutlineShoppingCart className="text-xl md:text-4xl" />
      </div>
      <SideBarCart toggleCart={toggleCart} refer={ref} />
    </div>
  );
};

export default NavBar;
