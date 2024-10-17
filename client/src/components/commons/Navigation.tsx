import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "./DropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authentication/authSlice";
import { RootState } from "../../store";

export const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogin } = useSelector((state: RootState) => state.auth);
  const profilePict = useSelector(
    (state: RootState) => state.userProfile.profile.profilePict
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
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

          {isLogin && (
            <div className="flex items-center justify-center h-[100%] gap-8 ms-10">
              <a
                className="h-[100%] cursor-pointer flex height-full items-center justify-center text-white text-xl hover:text-gray-600 hover:opacity-80"
                href="/"
              >
                <p>Home</p>
              </a>
              <a
                className="h-[100%] cursor-pointer flex height-full items-center justify-center text-white text-xl hover:text-gray-600 hover:opacity-80"
                href="/"
              >
                <p>Recommendations</p>
              </a>
              <a
                className="h-[100%] cursor-pointer flex height-full items-center justify-center text-white text-xl hover:text-gray-600 hover:opacity-80"
                href="/"
              >
                <p>Pre-Order</p>
              </a>
            </div>
          )}
        </div>

        {/* right nav */}
        <div className="flex items-center justify-center h-[100%] gap-2">
          {isLogin ? (
            <>
              <a href="/cart" className=" text-white hover:text-gray-600">
                <Icon icon="solar:cart-3-linear" className="w-8 h-8" />
              </a>
              <Dropdown handleLogout={handleLogout} porfilePict={profilePict} />
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-gray-800 px-4 py-2 hover:bg-gray-900 rounded-lg"
              >
                <p className="text-white text-sm font-bold">LOGIN</p>
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-gray-800 px-4 py-2 hover:bg-gray-900 rounded-lg"
              >
                <p className="text-white text-sm font-bold">SIGN UP</p>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
