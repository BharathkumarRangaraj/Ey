import React, { Suspense, useContext } from "react";

import Imagecard from "./Imagecard";
import { context } from "../Body";

const SimilarProducts = () => {
  const Images = useContext(context);
  return (
    <div>
      <h1 className="md:mt-0 mt-40 font-bold text-center flex-wrap w-100%">
        SIMILAR PRODUCTS
      </h1>
      <div className="md:flex md:overflow-x-auto align-middle ">
        {Images.map((data) => (
          <Suspense fallback={<h1>loadng</h1>}>
            <Imagecard data={data} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
