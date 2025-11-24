import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const axiosSecure = useAxios();
  const { user } = useAuth();

  const center = useLoaderData();
  const regionDuplicate = center.map((c) => c.region);
  const regions = [...new Set(regionDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = center.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);

    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isParcelWeight = parseFloat(data.parcelWeight);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (isParcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = isParcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    Swal.fire({
      title: "Agree with the Cost?",
      text: `You will be charged ${cost} taka !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I agree !",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log("cost", cost);
        //save the parcel info to the database
        axiosSecure.post("/parcels", data).then((result) => {
          console.log("after saving parcel", result.data);
        });
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };
  return (
    <div className="w-full bg-white rounded-2xl px-2 py-4 lg:px-25 lg:py-15 mb-5">
      <h1 className="text-4xl lg:text-5xl font-bold mb-3 lg:mb-5">
        Add Parcel
      </h1>
      <h1 className="border-b border-gray-300"></h1>

      {/* form  */}
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="py-3 space-y-3 lg:space-y-4 "
      >
        <h1 className="text-xl lg:text-2xl font-bold">
          Enter your parcel details
        </h1>
        <div className=" grid grid-cols-1 lg:grid-cols-2 md:gap-6 space-y-3 lg:space-y-0">
          <div className="flex items-center gap-5">
            <label className="label font-bold">
              <input
                type="radio"
                value="document"
                {...register("parcelType")}
                className="radio radio-success"
                defaultChecked
              />
              Document
            </label>
            <label className="label font-bold">
              <input
                type="radio"
                value="not-document"
                {...register("parcelType")}
                className="radio radio-success"
              />
              Not-Document
            </label>
          </div>
          <input defaultValue={user.email} {...register("senderEmail")} placeholder="" className="md:text-xl font-bold" disabled/>
          <div>
            <label>Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              placeholder="Parcel Name"
              className="input input-lg w-full"
            />
          </div>
          <div>
            <label>Parcel Weight (KG)</label>
            <input
              type="text"
              {...register("parcelWeight")}
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
                  {...register("senderName")}
                  defaultValue={user?.displayName}
                  readOnly
                  placeholder="Sender Name"
                  className="input input-lg w-full"
                />
              </div>

              <div className="">
                <label>Sender Contact No</label>
                <input
                  type="text"
                  {...register("senderContact")}
                  placeholder="Sender Contact No"
                  className="input input-lg w-full"
                />
              </div>
              <div className="">
                <label>Sender Region</label>
                <select
                  {...register("senderRegion")}
                  className="select w-full select-lg"
                >
                  <option value="" disabled>
                    Select Your Region
                  </option>
                  {regions.map((r, ind) => (
                    <option key={ind}>{r}</option>
                  ))}
                </select>
              </div>
              <div className="">
                <label>Sender Districts</label>
                <select
                  className="select select-lg w-full"
                  {...register("senderDistrict")}
                >
                  <option value="" disabled>
                    Select Your Districts
                  </option>
                  {districtsByRegion(senderRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-full">
                <label>Sender Address</label>
                <input
                  type="text"
                  {...register("senderAddress")}
                  placeholder="Address"
                  className="input input-lg w-full"
                />
              </div>
              <div className="">
                <label>Pickup Instruction</label>
                <textarea
                  {...register("senderDescription")}
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
                  {...register("receiverName")}
                  placeholder="Receiver Name"
                  className="input input-lg w-full"
                />
              </div>

              <div className="">
                <label>Receiver Contact No</label>
                <input
                  type="text"
                  {...register("receiverContact")}
                  placeholder="Receiver Contact No"
                  className="input input-lg w-full"
                />
              </div>
              <div className="">
                <label>Receiver Region</label>
                <select
                  {...register("receiverRegion")}
                  className="select w-full select-lg"
                >
                  <option value="" disabled>
                    Select Your Region
                  </option>
                  {regions.map((r, ind) => (
                    <option key={ind} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div className="">
                <label>Receiver District</label>
                <select
                  {...register("receiverDistrict")}
                  className="select select-lg w-full"
                >
                  <option value="" disabled>
                    Select Receiver District
                  </option>
                  {districtsByRegion(receiverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-full">
                <label>Receiver Address</label>
                <input
                  type="text"
                  {...register("receiverAddress")}
                  placeholder="Address"
                  className="input input-lg w-full"
                />
              </div>
              <div className="">
                <label>Delivery Instruction</label>
                <textarea
                  {...register("receiverDescription")}
                  placeholder="Delivery Instruction"
                  className="textarea textarea-lg w-full lg:w-187"
                />
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-lg">* PickUp Time 4pm-7pm Approx.</h1>
        <button
          type="submit"
          value={"send-parcel"}
          className="btn bg-[#CAEB66] text-lg mt-5 lg:p-5 hover-3d"
        >
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
