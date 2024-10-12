import { Outlet, useNavigate } from "react-router-dom";
import { Navigation } from "../components/commons/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { setUserProfile } from "../features/userProfile/userProfileSlice";
import axios from "axios";

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

const RootLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, userId, token, role } = useSelector(
    (state: RootState) => state.auth
  );
  const userProfile = useSelector((state: RootState) => state.userProfile);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/user/${userId}`,
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

      // Navigate to admin page if the user has admin role
      if (role === Role.ADMIN) {
        navigate("/admin");
      }
    } else {
      // Navigate to the landing page if not logged in
      navigate("/landing-page");
    }
  }, [isLogin, dispatch, userId, token, role, navigate]);

  console.log(isLogin, userId, token, role);
  console.log(userProfile);

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
