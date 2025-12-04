import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { FaRegEdit, FaSearch } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });
  const handlePayment = async (parcel) => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post(
      "/payment-checkout-session",
      paymentInfo
    );
    // console.log(res.data.url);
    window.location.assign(res.data.url);
  };

  const handleParcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((result) => {
          console.log(result.data);
          if (result.data.deletedCount) {
            //refresh the data
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Parcel request has been deleted.",
              icon: "success",
            });
          }
        });
        console.log(id);
      }
    });
  };
  return (
    <div>
      <h1 className="text-5xl p-3 font-bold">My Parcels</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Parcel Name</th>
              <th>Date</th>
              <th>Weight</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((p, i) => (
              <tr key={p._id}>
                <th>{i + 1}</th>
                <td>{p.parcelName}</td>
                <td>{p.createdAt}</td>
                <td>{p.parcelWeight} KG</td>
                <td>{p.cost} TK</td>
                <td>
                  {p.paymentStatus === "paid" ? (
                    <span className="text-green-500 bg-green-100 btn rounded-full">Paid</span>
                  ) : (
                    // <Link to={`/dashboard/payment/${p._id}`}>
                    //   <button className="bg-[#CAEB66] py-2 px-5 rounded-full">
                    //     Pay
                    //   </button>
                    // </Link>
                    <button
                      onClick={() => handlePayment(p)}
                      className="bg-[#CAEB66] py-2 px-5 rounded-full btn"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>{p.deliveryStatus} TK</td>
                <td className="flex items-center gap-2">
                  <button className="btn btn-ghost btn-circle">
                    <FaSearch size={23} />
                  </button>
                  <button className="btn btn-ghost btn-circle">
                    <FaRegEdit size={23} />
                  </button>
                  <button className="btn btn-ghost btn-circle">
                    <MdOutlineDeleteForever
                      size={25}
                      onClick={() => handleParcelDelete(p._id)}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
