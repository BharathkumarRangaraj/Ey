import React from "react";

const Sizes = () => {
  return (
    <div>
      <div className="flex  justify-between">
        <h1>Select Sizes</h1>
        <h3 className="text-pink-400">Size Guide</h3>
      </div>
      <ul className="flex ">
        <li className="m-2 border border-slate-500 p-1  hover:bg-pink-300">
          28
        </li>
        <li className="m-2 border border-slate-500 p-1  hover:bg-pink-300">
          30
        </li>
        <li className="m-2 border border-slate-500 p-1 active:bg-purple-300  hover:bg-pink-300">
          32
        </li>
        <li className="m-2 border border-slate-500 p-1  hover:bg-pink-300">
          34
        </li>
        <li className="m-2 border border-slate-500 p-1  hover:bg-pink-300">
          36
        </li>
        <li className="m-2 border border-slate-500 p-1  hover:bg-pink-300">
          38
        </li>
        <li className="m-2 border border-slate-500 p-1  hover:bg-pink-300">
          40
        </li>
        <li className="m-2 border border-slate-500 p-1  hover:bg-pink-300">
          42
        </li>
      </ul>
      <form className=" align-middle">
        <button className="w-96 m-2 rounded-lg p-2 bg-green-500 ">
          Add Cart
        </button>
      </form>
      <div className="pt-2">
        <h1 className="font-semibold">CHECK FOR DELIVERY DETAILS</h1>
        <form className="shadow-md rounded-lg pt-2">
          <input
            className="bg-slate-300 rounded-lg p-2 "
            type="text"
            placeholder="ENTER PINCODE"
          />
          <button className="bg-blue-100 rounded-sm p-2 font-semibold text-blue-900  hover:bg-blue-300">
            Check
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sizes;
