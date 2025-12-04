import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-5xl font-bold p-3">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Recipient Name</th>
              <th>Transaction Id</th>
              <th>Currency</th>
              <th>Payment Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payInfo, ind) => (
              <tr>
                <th>{ind + 1}</th>
                <td>
                  {payInfo.name} <br />
                  {payInfo.customerEmail}
                </td>
                <td>{payInfo.transactionId}</td>
                <td>{payInfo.currency}</td>
                <td>
                  {payInfo.amount} ({payInfo.paymentStatus})
                </td>
                <td>
                  <button className="btn bg-[#CAEB66]">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
