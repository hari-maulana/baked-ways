import { Outlet } from "react-router-dom";
import { Navigation } from "../components/commons/Navigation";
import { useState } from "react";

const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Navigation isLogin={isLogin} />
      <Outlet />
    </>
  );
};

export default RootLayout;
