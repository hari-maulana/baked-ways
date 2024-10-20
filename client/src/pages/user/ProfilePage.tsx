import { useSelector } from "react-redux";
import EditProfileModal from "../../components/profilePage/EditProfileModal";
import { RootState } from "../../store";
import { TransactionList } from "../../components/transaction/TransactionList";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const ProfilePage = () => {
  const userProfile = useSelector((state: RootState) => state.userProfile);
  /** fetch order data */
  const fetchOrders = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/orders/${userProfile.id}`
    );
    return response.data;
  };

  const { data, isLoading /*, error*/ } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });
  /** fetch order data */
  console.log(userProfile.profile.profilePict);
  return (
    <div className="container sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl my-16 flex flex-row justify-between">
      {/* container kiri*/}
      <div>
        <p className="text-2xl font-bold mb-6">My Profile</p>
        <div className="flex flex-row">
          {/* gambar profile */}
          <img
            className="w-36 h-48 object-contain mr-5 mb-5 rounded bg-slate-200"
            src={
              userProfile
                ? userProfile.profile.profilePict
                : "https://via.placeholder.com/150"
            }
            alt=""
          />
          {/* keterangan profile */}
          <div className="flex flex-col justify-between h-48">
            <div>
              <p className="font-bold">Name</p>
              <p>{userProfile?.fullName}</p>
            </div>
            <div>
              <p className="font-bold">Email</p>
              <p>{userProfile?.email}</p>
            </div>
            <div>
              <p className="font-bold">Phone</p>
              <p>{userProfile?.phone}</p>
            </div>
          </div>
        </div>
        <EditProfileModal />

        {/* <button ">
          Edit Profile
        </button> */}
      </div>

      {/* container kanan */}

      {data?.map((order: any) => (
        <TransactionList
          key={order.id}
          transactionName="Ongoing Transaction"
          bakeryName={order.bakery.name}
          date={order.createdAt}
          total={order.totalPrice}
          status={order.status}
        />
      ))}
    </div>
  );
};
