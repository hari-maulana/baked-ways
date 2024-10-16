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
        className="flex flex-row justify-between bg-yellow-400 px-4 py-2 align-baseline h-16 shadow-lg"
      >
        {/* logo */}
        <div className="flex items-center justify-center h-[100%]">
          <a className="h-[100%] cursor-pointer" href="/">
            <img
              className="h-[100%] bg-cover"
              src="https://res.cloudinary.com/circlehmhm/image/upload/v1729101327/logo_fznrvj.png"
              alt=""
            />
          </a>
        </div>

        {/* right nav */}
        <div className="flex items-center justify-center h-[100%] gap-2">
          {isLogin ? (
            <>
              <a href="/cart" className=" hover:text-gray-600">
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
