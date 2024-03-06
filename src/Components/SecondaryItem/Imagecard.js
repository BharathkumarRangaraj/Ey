import React from "react";

const Imagecard = ({ data }) => {
  const { category, image, price, rating } = data;
  return (
    <div className="m-2 md:ml-0 ml-24 hover:bg-slate-300 shadow-lg md:justify-evenly justify-center">
      <div className="w-40 h-50 border border-black text-sm">
        <img className="w-20 h-20 m-1" src={image} alt="product" />
        <div className="flex">
          <h1 className="m-1">${price}</h1>
          <h3 className="line-through m-1 text-slate-400">$4000</h3>
          <h4 className="text-green-500 m-1 text-[10px]">20% Offer</h4>
        </div>
        <div className="mt-1">
          <h1>{category}</h1>
          <div className="flex">
            <svg
              class="w-4 h-4 text-yellow-300 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <h1>{rating.rate}</h1>
            <h2>{rating.count}</h2>
          </div>
          <div className="w-full flex justify-between  border border-black mt-3">
            <form>
              <button className=" p-1 font-bold ">ADD TO CART</button>
            </form>
            <div className=" border border-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagecard;
