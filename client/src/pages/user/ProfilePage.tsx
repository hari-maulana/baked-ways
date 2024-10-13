import EditProfileModal from "../../components/profilePage/EditProfileModal";

export const ProfilePage = () => {
  return (
    <div className="container sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl my-16 flex flex-row justify-between">
      {/* container kiri*/}
      <div>
        <p className="text-2xl font-bold mb-6">My Profile</p>
        <div className="flex flex-row">
          {/* gambar profile */}
          <img
            className="w-36 h-48 object-cover mr-5 mb-5 rounded"
            src="https://vimhomes.vn/wp-content/uploads/2023/03/vietnamese-long-hair-1.jpg"
            alt=""
          />
          {/* keterangan profile */}
          <div className="flex flex-col justify-between h-48">
            <div>
              <p className="font-bold">Name</p>
              <p>Jane Dewe</p>
            </div>
            <div>
              <p className="font-bold">Email</p>
              <p>jane@dw.com</p>
            </div>
            <div>
              <p className="font-bold">Phone</p>
              <p>0987654321</p>
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
                src="../assets/logo.png"
                alt=""
              />
              <p className="text-green-500 font-bold">Delivered</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};