import React, { useContext } from "react";
import { context } from "../Body";

function Priceandtype() {
  const Imagess = useContext(context);

  const flterdata = Imagess.filter((item) => item.id <= 1);
  console.log(flterdata, "ff");
  return (
    <div>
      {flterdata.map((data) => (
        <div>
          <div className="flex m-2">
            <h1 className="mr-2 font-bold text-xl">${data.price}</h1>
            <span className="line-through font-semibold text-slate-500">
              $145
            </span>
            <span className="pl-2 text-green-500">20% OFF</span>
          </div>
          <h3 className="m-2 font-semibold">MENS CLOTHING</h3>
          <div className="flex">
            <svg
              class="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <h4 className="mx-2">{data.rating.rate} |</h4>
            <h4 className="mx-2 text-slate-400">{data.rating.count / 1000}K</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Priceandtype;
