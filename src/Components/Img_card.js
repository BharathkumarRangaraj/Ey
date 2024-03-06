import React from "react";

const Img_card = ({ data }) => {
  return (
    <div className="w-1/2   shadow-lg m-2 rounded-md pt-6 hover:bg-slate-300">
      <img alt="photos" src={data} />
    </div>
  );
};

export default Img_card;
