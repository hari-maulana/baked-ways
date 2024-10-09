import { Outlet } from "react-router-dom";
import { Navigation } from "../components/commons/Navigation";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
