import React from "react";
import Priceandtype from "./SecondaryComponents/Priceandtype";
import Offers from "./SecondaryComponents/offers";
import Lstdresses from "./SecondaryComponents/Lstdresses";
import Sizes from "./SecondaryComponents/Sizes";
import ProductInfo from "./SecondaryComponents/ProductInfo";
import Rating from "./SecondaryComponents/Rating";

const Clothdetas = () => {
  return (
    <div className="md:w-1/2 w-full  h-[200px] border-black">
      <Priceandtype />
      <Offers />
      <Lstdresses />
      <Sizes />
      <ProductInfo />
      <Rating />
    </div>
  );
};

export default Clothdetas;
