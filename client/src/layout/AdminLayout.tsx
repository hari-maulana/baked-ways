import { useEffect } from "react";
import { AdmNavbar } from "../components/admin/AdmNavbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setUserProfile } from "../features/userProfile/userProfileSlice";
import axios from "axios";

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export const AdminLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLogin, userId, token, role } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const profileData = response.data;
        dispatch(setUserProfile(profileData));
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (isLogin) {
      fetchUserProfile();
    } else {
      // Navigate to the landing page if not logged in
      navigate("/landing-page");
    }
    if (role === Role.USER) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  return (
    <>
      <AdmNavbar />
      <div className="flex flex-col items-center">
        <Outlet />
      </div>
    </>
  );
};
