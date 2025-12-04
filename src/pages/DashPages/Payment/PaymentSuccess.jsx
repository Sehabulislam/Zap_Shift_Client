import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxios();
  const [paymentInfo, setPaymentInfo] = useState({});

  // console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
          if (res.data.paymentInfo.insertedId) {
            toast.success("Your Payment has successfully.");
          }
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="https://static.vecteezy.com/system/resources/previews/019/520/923/non_2x/payment-success-paid-bill-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
        alt=""
        className="w-80"
      />
      <h1 className="text-4xl font-bold text-green-500">Payment Successful</h1>
      <p>Your Transaction Id : {paymentInfo.transactionId}</p>
      <p>Your Tracking Id : {paymentInfo.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;
