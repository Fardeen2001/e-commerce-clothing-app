import Image from "next/image";
import Link from "next/link";
const GetDataFunction = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/mugs`, {
      next: { revalidate: 0 },
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("invalid while fetching");
    }
    return await res.json();
  } catch (error) {
    console.error(error.message);
  }
};
const Mugs = async () => {
  const Data = await GetDataFunction();
  return (
    <>
      {Object.values(Data.mugs).length === 0 && (
        <p className="text-center m-20">
          Sorry! Currently Mugs are out of stock, We are adding soon, so stay
          tuned.
        </p>
      )}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {Object.values(Data.mugs) &&
          Object.values(Data.mugs).map((item) => (
            <div key={item._id}>
              <section className="text-gray-600 body-font">
                <div className="container p-5 mx-auto">
                  <Link
                    href={`/products/${item.slug}`}
                    className="block relative  rounded overflow-hidden shadow-lg"
                  >
                    <Image
                      alt={item.title}
                      className="object-cover object-top w-full h-full block"
                      src={item.image}
                      width={100}
                      height={100}
                      quality={100}
                    />

                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-1">₹{item.price}</p>
                      <div className="m-1">
                        {item.size.map((size) => (
                          <span
                            key={size}
                            className="border border-gray-300 px-1 mx-1"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                      <div className="m-1">
                        {Object.values(item.varient).includes("white") && (
                          <button
                            className={`border-2 border-gray-300 bg-white rounded-full w-6 h-6 mx-1 focus:outline-none`}
                          ></button>
                        )}
                        {Object.values(item.varient).includes("red") && (
                          <button
                            className={`border-2 border-gray-300 bg-red-700 rounded-full w-6 h-6 mx-1 focus:outline-none`}
                          ></button>
                        )}
                        {Object.values(item.varient).includes("blue") && (
                          <button
                            className={`border-2 border-gray-300 bg-blue-700 rounded-full w-6 h-6 mx-1 focus:outline-none`}
                          ></button>
                        )}
                        {Object.values(item.varient).includes("beige") && (
                          <button
                            className={`border-2 border-gray-300 bg-amber-50 rounded-full w-6 h-6 mx-1 focus:outline-none`}
                          ></button>
                        )}
                        {Object.values(item.varient).includes("yellow") && (
                          <button
                            className={`border-2 border-gray-300 bg-yellow-700 rounded-full w-6 h-6 mx-1 focus:outline-none`}
                          ></button>
                        )}
                        {Object.values(item.varient).includes("gray") && (
                          <button
                            className={`border-2 border-gray-300 bg-gray-700 rounded-full w-6 h-6 mx-1 focus:outline-none`}
                          ></button>
                        )}
                        {Object.values(item.varient).includes("green") && (
                          <button
                            className={`border-2 border-gray-300 bg-green-700 rounded-full w-6 h-6 mx-1 focus:outline-none`}
                          ></button>
                        )}
                        {Object.values(item.varient).includes("purple") && (
                          <button
                            className={`border-2 border-gray-300 bg-purple-700 rounded-full w-6 h-6 mx-1 focus:outline-none`}
                          ></button>
                        )}
                        {Object.values(item.varient).includes("black") && (
                          <button
                            className={`border-2 border-gray-300 bg-black rounded-full w-6 h-6 mx-1 focus:outline-none`}
                          ></button>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </section>
            </div>
          ))}
      </div>
    </>
  );
};

export default Mugs;
