import React from "react";

const Offers = () => {
  return (
    <div>
      <h2 className="font-bold m-2 justify-between">OFFERS</h2>
      <div className="flex">
        <Offer price="$123" />
        <Offer price="$140" />
      </div>
    </div>
  );
};

function Offer({ price }) {
  return (
    <div className=" p-2 border border-blue-600 rounded-lg mx-2 shadow shadow-blue-200 bg-blue-100 hover:bg-blue-300">
      <h3 className="text-blue-800 font-bold">Buy 2 shirt at just {price}</h3>
      <p>Add any 2 shirt to the cart to avail offer</p>
    </div>
  );
}

export default Offers;
