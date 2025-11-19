import React from "react";

const Pricing = () => {
  return (
    <div className="px-2 py-5 lg:px-20 lg:py-15 bg-white w-full space-y-3 rounded-2xl">
      <div className="lg:w-2xl space-y-3">
        <h1 className="text-4xl lg:text-5xl font-bold">Pricing Calculator</h1>
        <p className="">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <h1 className="border-b border-gray-300 lg:col-span-full mt-3 lg:mt-0"></h1>
      <div className="">
        <h1 className="text-center text-2xl font-bold mb-5">Calculate Your Cost</h1>
        {/* form  */}
        <form className="flex flex-col-reverse lg:grid lg:grid-cols-2">
          <div className=" space-y-4">
            <div className="">
              <label>Parcel type</label>
              <select className="select select-lg w-full">
                <option disabled={true}>Select your region</option>
                <option>Document</option>
                <option>Parcel</option>
                <option>Fragile</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Groceries</option>
                <option>Food</option>
                <option>Liquid</option>
                <option>Medicine</option>
                <option>Heavy Item</option>
                <option>Large Package</option>
                <option>Small Package</option>
              </select>
            </div>
            <div className="">
              <label>Delivery Destination</label>
              <select className="select select-lg w-full">
                <option disabled={true}>Select your region</option>
                <option>Dhaka Division</option>
                <option>Chattogram Division</option>
                <option>Rajshahi Division</option>
                <option>Khulna Division</option>
                <option>Barishal Division</option>
                <option>Sylhet Division</option>
                <option>Mymensingh Division</option>
                <option>Rangpur Division</option>
              </select>
            </div>
            <div className="">
              <label>Weight (KG)</label>
              <input
                type="text"
                placeholder="Weight (KG)"
                className="input input-lg w-full"
              />
            </div>
            <div className="grid grid-cols-6 gap-3 mt-7">
              <button className="btn btn-ghost border-[#CAEB66] col-span-2 text-lg">Reset</button>
              <button className="btn col-span-4 bg-[#CAEB66] text-lg">Calculate</button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-7xl lg:text-9xl font-bold">50 Tk</h1>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Pricing;
