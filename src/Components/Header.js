import React, { useEffect, useState, useTransition } from "react";
import APIFETCH from "../utils/const";

const Header = () => {
  const [searchtext, setsearchtext] = useState("");
  const [text, setText] = useState("");
  const [suggest, setsuggest] = useState([]);
  const [showsuggetion, setshowsuggetion] = useState(false);
  const [isPending, startTransition] = useTransition();

  console.log(suggest, "suggest");

  useEffect(() => {
    getAPI();
  }, []);
  async function getAPI() {
    const data = await fetch(APIFETCH);
    const json = await data?.json();
    setsuggest(json);
  }

  return (
    <div className="w-full md:h-18 h-14 flex justify-between shadow-md">
      <h1 className="text-green-900 font-bold p-4 text-2xl">Ekart</h1>
      <ul className="flex md:text-sm text-xs pr-40 font-semibold">
        <li className=" hover:bg-slate-300 mt-2 md:ml-10 ml-1">NEW ARRIVALS</li>
        <li className="hover:bg-slate-300 mt-2 md:ml-10 ml-1">MENS</li>
        <li className="hover:bg-slate-300 mt-2 md:ml-10 ml-1">
          WINTER COLLECTION
        </li>
        <li className="hover:bg-slate-300 mt-2 md:ml-10 ml-1">SHOP BY MERCH</li>
        <li className="hover:bg-slate-300 mt-2 md:ml-10 ml-1">UNISEX</li>
        <li>
          <input
            className="  md:ml-10 ml-1 rounded-lg border border-purple-700 shadow-lg p-1 hover:bg-purple-300"
            value={searchtext}
            onChange={(e) => setsearchtext(e.target.value)}
            onFocus={() => setshowsuggetion(true)}
            onBlur={() => setshowsuggetion(false)}
            placeholder="Try Searching "
          />
        </li>
        <button onClick={() => startTransition(() => setText(searchtext))}>
          search
        </button>

        <div className="bg-white rounded-lg py-2 px-2 shadow-lg border border-gray-200 visible fixed">
          {showsuggetion && (
            <ul className="fixed w-[32rem]">
              {suggest.map((s) => (
                <li
                  key={s}
                  className=" bg-white py-2 px-2 shadow-sm  hover:bg-gray-200"
                >
                  {"🔎" + s.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <li className=" mt-2 md:ml-10 ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:bg-slate-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </li>
        <li className=" mt-2 md:ml-10 ml-1 hover:bg-slate-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </li>
        <li className=" mt-2 md:ml-10 ml-1 hover:bg-slate-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Header;
