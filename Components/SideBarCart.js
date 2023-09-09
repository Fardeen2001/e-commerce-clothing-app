import React from "react";
import {
  AiFillCarryOut,
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";

const SideBarCart = (props) => {
  return (
    <div
      ref={props.refer}
      className="w-72 h-full sideBarCart absolute top-0 right-0 bg-zinc-900 px-8 py-10 text-white transform transition-transform translate-x-full"
    >
      <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
      <span
        onClick={props.toggleCart}
        className="absolute top-2 right-2 cursor-pointer text-2xl"
      >
        <AiOutlineClose />
      </span>
      <ol className="list-decimal font-semibold">
        <li>
          <div className="item flex my-3">
            <div className="w-2/3 font-semibold">
              T-shirt - wear the clothes
            </div>
            <div className="w-2/1 flex items-center justify-center text-lg">
              <AiOutlineMinusCircle className="cursor-pointer" />{" "}
              <span className="mx-2 text-sm">1</span>
              <AiOutlinePlusCircle className="cursor-pointer" />
            </div>
          </div>
        </li>
        <li>
          <div className="item flex my-3">
            <div className="w-2/3 font-semibold">
              T-shirt - wear the clothes
            </div>
            <div className="w-2/1 flex items-center justify-center text-lg">
              <AiOutlineMinusCircle className="cursor-pointer" />{" "}
              <span className="mx-2 text-sm">1</span>
              <AiOutlinePlusCircle className="cursor-pointer" />
            </div>
          </div>
        </li>
        <li>
          <div className="item flex my-3">
            <div className="w-2/3 font-semibold">
              T-shirt - wear the clothes
            </div>
            <div className="w-2/1 flex items-center justify-center text-lg">
              <AiOutlineMinusCircle className="cursor-pointer" />{" "}
              <span className="mx-2 text-sm">1</span>
              <AiOutlinePlusCircle className="cursor-pointer" />
            </div>
          </div>
        </li>
        <li>
          <div className="item flex my-3">
            <div className="w-2/3 font-semibold">
              T-shirt - wear the clothes
            </div>
            <div className="w-2/1 flex items-center justify-center text-lg">
              <AiOutlineMinusCircle className="cursor-pointer" />{" "}
              <span className="mx-2 text-sm">1</span>
              <AiOutlinePlusCircle className="cursor-pointer" />
            </div>
          </div>
        </li>
      </ol>
      <div className="flex">
        <button class="flex  mr-2 text-black bg-slate-200 border-0 p-2 focus:outline-none hover:bg-stone-600 hover:text-white rounded text-sm">
          <BsBagCheckFill className="m-0.5" /> Checkout
        </button>
        <button class="flex  mr-2 text-black bg-slate-200 border-0 p-2 focus:outline-none hover:bg-stone-600 hover:text-white rounded text-sm">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default SideBarCart;
