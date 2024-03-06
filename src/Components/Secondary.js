import React, { createContext } from "react";
import SimilarProducts from "./SecondaryItem/SimilarProducts";
import RecentlyViewedproducts from "./SecondaryItem/RecentlyViewedproducts";

export const context = createContext();
const Secondary = () => {
  return (
    <div className="m-4 md:mt-8 mt-[1000px]">
      <SimilarProducts />
      <RecentlyViewedproducts />
    </div>
  );
};

export default Secondary;
