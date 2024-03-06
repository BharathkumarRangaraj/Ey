import React from "react";

const Comments = () => {
  return (
    <div>
      <div className="flex pt-4">
        <p className="font-semibold">Bharath Kumar</p>
        <p className="text-green-600 ml-4">Verified Buyer</p>
        <p className="absolute right-10">7 Months Ago</p>
      </div>
      <div className="flex">
        <div class="flex items-center">
          <svg
            class="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <h1>3.9 | Powder Blue, Size L</h1>
      </div>
      <div className="flex pt-3">
        <p className="font-semibold">Superb Product. </p>
        <p>Great quality and nice design.Will buy more nbsb nbsb..</p>
      </div>
    </div>
  );
};

export default Comments;
