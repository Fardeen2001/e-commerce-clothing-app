import Image from "next/image";
import pic from "@/public/hoodie.webp";

const Orders = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Clothwear.com
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Order Id : #854899754
            </h1>

            <p className="leading-relaxed mb-4">Order Placed Successfully!</p>
            <div className="flex mb-4">
              <a className="flex-grow border-b border-gray-300 py-2 text-lg px-1">
                Item Description
              </a>
              <a className="flex-grow border-b border-gray-300 py-2 text-lg px-1">
                Quantity
              </a>
              <a className="flex-grow border-b border-gray-300 py-2 text-lg px-1">
                Item Total
              </a>
            </div>
            <div className="flex border-b border-gray-200 py-2">
              <span className="text-gray-500">Wear the code (black/s)</span>
              <span className="ml-auto text-gray-500">1</span>
              <span className="ml-auto text-gray-500">499 </span>
            </div>

            <div className="flex my-5">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
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
  );
};

export default Orders;
