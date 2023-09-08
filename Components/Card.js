import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = (props) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {props.Data &&
        props.Data.map((item) => (
          <div key={item.id}>
            <section className="text-gray-600 body-font">
              <div className="container p-5 mx-auto">
                <Link
                  href={"/products/tshirts"}
                  className="block relative  rounded overflow-hidden shadow-lg"
                >
                  <Image
                    alt={item.title}
                    className="object-cover object-top w-full h-full block"
                    src={item.img}
                    width={100}
                    height={100}
                  />

                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {item.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.title}
                    </h2>
                    <p className="mt-1">₹{item.price}</p>
                    <p className="sizes">S, M, L, XL, XXL</p>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        ))}
    </div>
  );
};

export default Card;
