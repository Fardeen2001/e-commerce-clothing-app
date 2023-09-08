import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

const SideBarCart = () => {
  const ref = useRef();
  const toggleCart = () => {};
  return (
    <div
      ref={ref}
      className="sideBarCart absolute top-0 right-0 bg-zinc-900 p-10 text-white"
    >
      <h2 className="font-bold text-xl">Shopping Cart</h2>
      <span
        onClick={toggleCart}
        className="absolute top-2 right-2 cursor-pointer text-2xl"
      >
        <AiOutlineClose />
      </span>
      <ol>
        <li>
          <span>T-shirt - wear the clothes</span>
        </li>
      </ol>
    </div>
  );
};

export default SideBarCart;
