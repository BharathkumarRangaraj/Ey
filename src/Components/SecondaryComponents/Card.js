import React from "react";

const Card = ({ data }) => {
  return (
    <div className="flex-wrap hover:bg-pink-300">
      <img
        className="h-10 w-10 m-2 border border-black flex"
        alt="fashon"
        src={data}
      />
    </div>
  );
};

export default Card;
