import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxios from "../../../hooks/useAxios";
import Loading from "../../../components/Loading";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxios();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });
  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1>
        Please Pay ${parcel.cost} for : {parcel.parcelName}
      </h1>
      <button onClick={handlePayment} className="btn bg-[#CAEB66] py-2 px-5 ">
        Pay
      </button>
    </div>
  );
};

export default Payment;
