import useAuth from '../../hooks/useAuth';
import { useQuery } from "@tanstack/react-query";
import useAxios from '../../hooks/useAxios';
const MyParcels = () => {
    const {user} = useAuth()
    const axiosSecure = useAxios()
    const {data : parcels = []} = useQuery({
        queryKey : ['myParcels', user?.email],
        queryFn : async()=>{
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
            return res.data;
        }
    })
    return (
        <div>
            <h1>my parcel : {parcels.length}</h1>
        </div>
    );
};

export default MyParcels;