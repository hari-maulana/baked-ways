// RootLayout.tsx
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/commons/Navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useUserProfile } from "../features/userProfile/useUserProfile";

const RootLayout = () => {
  const userProfile = useSelector((state: RootState) => state.userProfile);
  const { isLoading } = useUserProfile();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const isLogin = Boolean(userProfile.id);
  console.log(userProfile);

  return (
    <>
      <Navigation isLogin={isLogin} />
      <Outlet />
    </>
  );
};

export default RootLayout;
