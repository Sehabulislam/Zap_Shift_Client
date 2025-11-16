import React from "react";
import cashDelivery from "../../assets/icon/cash-on-delivery.png";
import booking from "../../assets/icon/booking.png";
import deliveryImg from "../../assets/icon/freight-delivery.png";
import calendar from "../../assets/icon/calendar.png";
const howWorks = [
  {
    "image" : booking,
    "title": "Booking Pick & Drop",
    "description":
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    "image" : cashDelivery,
    "title": "Cash On Delivery",
    "description":
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    "image" : deliveryImg,
    "title": "Delivery Hub",
    "description":
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    "image" : calendar,
    "title": "Booking SME & Corporate",
    "description":
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowWorks = () => {
  return (
    <div className="pb-10">
      <h1 className="text-3xl py-5 font-bold text-[#03373D]">How it Works</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:w-11/12 mx-auto">
        {howWorks.map((work) => (
          <div className="w-full bg-white flex flex-col justify-center gap-4 p-2 px-2 md:p-5 rounded-2xl shadow-xl text-[#03373D]">
            <img src={work.image} alt="deliveryImg" className="w-15 mx-auto lg:mx-0" />
            <h1 className="text-xl md:text-2xl font-bold text-">{work.title}</h1>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
