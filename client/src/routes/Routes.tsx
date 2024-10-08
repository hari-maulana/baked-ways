import { RouteObject } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import RootLayout from "../layout/rootLAyout";
import LandingPage from "../pages/LandingPages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,

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
