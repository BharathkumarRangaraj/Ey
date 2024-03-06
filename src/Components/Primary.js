import React, { createContext } from "react";
import Cloths from "./Cloths";
import Clothdetas from "./Clothdetas";

export const context = createContext();

const Primary = () => {
  return (
    <div className="md:flex border w-full md:h-[1020px]">
      <Cloths />
      <h1>cloths</h1>
      <Clothdetas />
    </div>
  );
};

export default Primary;
