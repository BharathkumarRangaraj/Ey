import React, { createContext, useEffect, useState } from "react";
import Secondary from "./Secondary";
import Primary from "./Primary";
import APIFETCH from "../utils/const";

export const context = createContext();
const Body = () => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    getAPI();
  }, []);
  async function getAPI() {
    const data = await fetch(APIFETCH);
    const json = await data?.json();
    setImages(json);
  }
  return (
    <div>
      <context.Provider value={Images}>
        <Primary />
        <Secondary />
      </context.Provider>
    </div>
  );
};

export default Body;
