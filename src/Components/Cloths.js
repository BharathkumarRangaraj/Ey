import React from "react";

import Imgcard from "./Img_card";

const Cloths = () => {
  return (
    <div className="md:w-1/2 overflow-x-scroll ">
      <div className="  md:flex ">
        <Imgcard
          data={
            "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/x/l/d/s-st28-vebnor-original-imagq6aqgh2hzv22.jpeg?q=70&crop=false"
          }
        />
        <Imgcard
          data={
            "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/s/f/g/s-st28-vebnor-original-imagq6aqpbzmesaz.jpeg?q=70&crop=false"
          }
        />
      </div>
      <div className="md:flex">
        <Imgcard
          data={
            "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/y/e/w/s-st28-vebnor-original-imagq6aqbzgbe9fh.jpeg?q=70&crop=false"
          }
        />
        <Imgcard
          data={
            "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/x/l/d/s-st28-vebnor-original-imagq6aqgh2hzv22.jpeg?q=70&crop=false"
          }
        />
      </div>
    </div>
  );
};

export default Cloths;
