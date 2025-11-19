import React from "react";
import RiderImg from "../assets/agent-pending.png";
const BeRider = () => {
  return (
    <div className="py-15 px-20 bg-white w-full rounded-2xl space-y-4">
      <div>
        <h1 className="text-5xl font-bold mb-2">Be a Rider</h1>
        <p className="w-2xl">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <h1 className="border-b border-gray-300 lg:col-span-full mt-3 lg:mt-0"></h1>
      <div className="grid grid-cols-2 gap-20">
        <div className="">
          <h1 className="text-2xl font-bold">Tell us about yourself</h1> 
          {/* form  */}
          <form >
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
            <div className="">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-lg w-full"
              />
            </div>

            <div className="">
              <label>Your Age</label>
              <input
                type="text"
                placeholder="Your Age"
                className="input input-lg w-full"
              />
            </div>
            <div className="">
              <label>Your Email</label>
              <input
                type="text"
                placeholder="Your Email"
                className="input input-lg w-full"
              />
            </div>
            <div className="">
              <label>Your Region</label>
              <select className="select select-lg w-full">
                <option disabled={true}>Select your region</option>
                <option>North</option>
                <option>South</option>
                <option>East</option>
                <option>West</option>
                <option>Central</option>
              </select>
            </div>
            <div className="">
              <label>Your NID No.</label>
              <input
                type="text"
                placeholder="Your NID No."
                className="input input-lg w-full"
              />
            </div>

            <div className="">
              <label>Your Contact No.</label>
              <input
                type="text"
                placeholder="Ex : 01750-000000"
                className="input input-lg w-full"
              />
            </div>
            <div className="col-span-full">
              <label>Which wire-house you want to work?</label>
              <select
                defaultValue="Pick a color"
                className="select w-full select-lg"
              >
                <option disabled={true}>Select wire-house</option>
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Rajshahi</option>
                <option>Rangpur</option>
                <option>Khulna</option>
                <option>Barishal</option>
                <option>Sylhet</option>
                <option>Mymensingh</option>
              </select>
            </div>
          </div>
          <div className="">
            <button className="btn bg-[#CAEB66] text-lg w-full mt-7">Submit</button>
          </div>
          </form>
        </div>
        <div className="ml-10">
          <img src={RiderImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BeRider;
