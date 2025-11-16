import React from "react";
import Marquee from "react-fast-marquee";
import brand1 from "../../assets/brands/amazon.png";
import brand3 from "../../assets/brands/casio.png";
import brand4 from "../../assets/brands/moonstar.png";
import brand5 from "../../assets/brands/randstad.png";
import brand6 from "../../assets/brands/star.png";
import brand7 from "../../assets/brands/start_people.png";

const Brands = () => {
  return (
    <div className="md:py-10 w-9/12 mx-auto">
      <h1 className="md:text-3xl font-bold text-[#03373D] text-center pb-7">
        We've helped thousands of sales teams
      </h1>
      <Marquee speed={25} pauseOnHover>
        <img src={brand1} alt="" className="w-35 ml-5 md:ml-10" />
        <img src={brand3} alt="" className="w-40 ml-5 md:ml-10" />
        <img src={brand4} alt="" className="w-55 ml-5 md:ml-10" />
        <img src={brand5} alt="" className="w-50 ml-5 md:ml-10" />
        <img src={brand6} alt="" className="w-35 ml-5 md:ml-10" />
        <img src={brand7} alt="" className="w-56 ml-5 md:ml-10" />
      </Marquee>
    </div>
  );
};

export default Brands;
