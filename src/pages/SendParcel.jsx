import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const handleSendParcel =(data)=>{
        console.log(data);
    }
  return (
    <div className="w-full bg-white rounded-2xl px-2 py-4 lg:px-25 lg:py-15 mb-5">
      <h1 className="text-4xl lg:text-5xl font-bold mb-3 lg:mb-5">Add Parcel</h1>
      <h1 className="border-b border-gray-300"></h1>

      {/* form  */}
      <form onSubmit={handleSendParcel} className="py-3 space-y-3 lg:space-y-4 ">
        <h1 className="text-xl lg:text-2xl font-bold">Enter your parcel details</h1>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="radio-7"
              className="radio radio-success"
              defaultChecked
            />
            <h1 className="font-bold">Document</h1>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="radio-7"
              className="radio radio-success"
            />
            <h1 className="font-bold">Not-Document</h1>
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 md:gap-6 space-y-3 lg:space-y-0">
          <div>
            <label>Parcel Name</label>
            <input
              type="text"
              placeholder="Parcel Name"
              className="input input-lg w-full"
            />
          </div>
          <div>
            <label>Parcel Weight (KG)</label>
            <input
              type="text"
              placeholder="Parcel Weight (KG)"
              className="input input-lg w-full"
            />
          </div>
          <h1 className="border-b border-gray-300 lg:col-span-full mt-3 lg:mt-0"></h1>
          {/* sender details  */}
          <div>
            <h1 className="text-xl font-bold mb-2">Sender Details</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 space-y-3 lg:gap-5">
              <div className="">
                <label>Sender Name</label>
                <input
                  type="text"
                  placeholder="Sender Name"
                  className="input input-lg w-full"
                />
              </div>
              <div className="">
                <label>Sender Pickup Wire house</label>
                <select className="select select-lg w-full">
                  <option disabled={true}>Select Wire house</option>
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
              <div className="">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-lg w-full"
                />
              </div>
              <div className="">
                <label>Sender Contact No</label>
                <input
                  type="text"
                  placeholder="Sender Contact No"
                  className="input input-lg w-full"
                />
              </div>
              <div className="col-span-full">
                <label>Your Region</label>
                <select
                  defaultValue="Pick a color"
                  className="select w-full select-lg"
                >
                  <option disabled={true}>Select Your Region</option>
                  <option>North</option>
                  <option>South</option>
                  <option>East</option>
                  <option>West</option>
                  <option>Central</option>
                </select>
              </div>
              <div className="">
                <label>Pickup Instruction</label>
                <textarea
                  placeholder="Pickup Instruction"
                  className="textarea textarea-lg w-full lg:w-187"
                />
              </div>
            </div>
          </div>
          <h1 className="border-b border-gray-300 mt-3 block lg:hidden"></h1>
            {/* Receiver details  */}
          <div>
            <h1 className="text-xl font-bold mb-2">Receiver Details</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 space-y-3 lg:gap-5">
              <div className="">
                <label>Receiver Name</label>
                <input
                  type="text"
                  placeholder="Receiver Name"
                  className="input input-lg w-full"
                />
              </div>
              <div className="">
                <label>Receiver Pickup Wire house</label>
                <select className="select select-lg w-full">
                  <option disabled={true}>Select Wire house</option>
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
              <div className="">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-lg w-full"
                />
              </div>
              <div className="">
                <label>Receiver Contact No</label>
                <input
                  type="text"
                  placeholder="Receiver Contact No"
                  className="input input-lg w-full"
                />
              </div>
              <div className="col-span-full">
                <label>Your Region</label>
                <select
                  defaultValue="Pick a color"
                  className="select w-full select-lg"
                >
                  <option disabled={true}>Select Your Region</option>
                  <option>North</option>
                  <option>South</option>
                  <option>East</option>
                  <option>West</option>
                  <option>Central</option>
                </select>
              </div>
              <div className="">
                <label>Delivery Instruction</label>
                <textarea
                  placeholder="Delivery Instruction"
                  className="textarea textarea-lg w-full lg:w-187"
                />
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-lg">* PickUp Time 4pm-7pm Approx.</h1>
        <button type="submit" className="btn bg-[#CAEB66] text-lg mt-5 lg:p-5 hover-3d">Proceed to Confirm Booking</button>
      </form>
    </div>
  );
};

export default SendParcel;
