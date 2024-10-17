import { useSelector } from "react-redux";
import EditProfileModal from "../../components/profilePage/EditProfileModal";
import { RootState } from "../../store";

export const ProfilePage = () => {
  const userProfile = useSelector((state: RootState) => state.userProfile);
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
      <div>
        <p className="text-2xl font-bold mb-6">Transaction History</p>
        {/* hitory list */}

        <ul>
          <li className="flex flex-row justify-between border-b-2 border-gray-500 py-2 gap-24">
            {/* keterangan */}
            <div>
              <p className="font-bold">Mako Bakery</p>
              <small>Monday, August 11, 2022</small>
              <p className="font-bold">Total: Rp. 500.000</p>
            </div>
            {/* status dan logo */}
            <div className="flex flex-col items-center justify-between">
              <img
                className="w-25 h-10 object-contain rounded"
                src="https://res.cloudinary.com/circlehmhm/image/upload/v1729191371/Bread_House_Bakery_Logo_1600_x_300_px_1600_x_200_px_1600_x_240_px_2_hyps46.svg"
                alt="logo"
              />
              <p className="text-green-500 font-bold">Delivered</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
