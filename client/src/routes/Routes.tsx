import { RouteObject } from "react-router-dom";
import LandingPage from "../pages/LandingPages";
import { LoginPage } from "../pages/LoginPage";
import RootLayout from "../layout/RootLayout";
import MenuPage from "../pages/user/MenuPage";
import { CartPage } from "../pages/user/CartPage";
import HomePage from "../pages/user/HomePage";
import { AdminLayout } from "../layout/AdminLayout";
import { RegisterPage } from "../pages/RegisterPage";
import { ProfilePage } from "../pages/user/ProfilePage";
import { AdmTransactionPage } from "../pages/admin/AdmTransactionPage";
import { PartnerProfile } from "../pages/admin/PartnerProfile";
import { AdmAddProductPage } from "../pages/admin/AdmAddProductPage";
import { AdmRegisterPage } from "../pages/AdmRegisterPage";

const routes: RouteObject[] = [
  {
    path: "/landing-page",
    element: <LandingPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdmTransactionPage />,
      },
      {
        path: "profile",
        element: <PartnerProfile />,
      },
      {
        path: "add-product",
        element: <AdmAddProductPage />,
      },
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/menu/:id",
        element: <MenuPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/admin-register",
    element: <AdmRegisterPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,

    // children: [
    //     {
    //         index: true,
    //         element: <Home />,
    //     },
    //     {
    //         path: "/search",
    //         element: <Search />,
    //     },
    //     {
    //         path: "/follows",
    //         element: <Follows />,
    //     },
    //     {
    //         path: "/profile",
    //         element: <Profile />,
    //     },
    //     {
    //         path: "/post/:id",
    //         element: <PostDetail/>
    //     },
    //     {
    //         path: "/users/:id",
    //         element: <UserProfile />,
    //     }
    // ]
  },
];

export default routes;
