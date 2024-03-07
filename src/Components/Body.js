import React, {
  createContext,
  useEffect,
  useState,
  useTransition,
} from "react";
import Secondary from "./Secondary";
import Primary from "./Primary";
import APIFETCH from "../utils/const";

export const context = createContext();
const Body = () => {
  const [Images, setImages] = useState([]);
  const [dupimages, setdupimages] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    getAPI();
  }, []);
  async function getAPI() {
    const data = await fetch(APIFETCH);
    const json = await data?.json();

    //// updating obj in two state but setImages is priorty that needs to be updated first without reducing the performance
    startTransition(() => {
      setdupimages(json);
    });

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
