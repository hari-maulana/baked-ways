import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authentication/authSlice";
import { RootState } from "../../store";
import { AdmDropdown } from "./AdmDropdown";

export const AdmNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bakeryPict = useSelector(
    (state: RootState) => state.userProfile.profile.profilePict
  );

  const { isLogin } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  console.log(bakeryPict);
  return (
    <>
      {/* top nav */}
      <div
        id="nav"
        className="flex flex-row justify-between bg-[#e0595f] px-4 py-2 items-center h-16 shadow-lg"
      >
        {/* logo */}
        <div className="flex items-center h-[100%]">
          <a className="h-[100%] cursor-pointer" href="/">
            <img
              className="h-[100%] bg-cover"
              src="https://res.cloudinary.com/circlehmhm/image/upload/v1729191114/Bread_House_Bakery_Logo_1600_x_300_px_1600_x_200_px_1600_x_240_px_1_eka6rt.svg"
              alt=""
            />
          </a>
        </div>

        {/* right nav */}
        <div className="flex items-center justify-center h-[100%] gap-2">
          {isLogin ? (
            <>
              <p className="text-2xl font-bold">Admin Panel</p>

              <AdmDropdown
                handleLogout={handleLogout}
                bakeryPict={bakeryPict}
              />
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/auth")}
                className="bg-gray-800 px-4 py-2 hover:bg-gray-900 rounded-lg"
              >
                <p className="text-white text-sm font-bold">LOGIN / SIGN UP</p>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
