import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import routes from "./routes/Routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={createBrowserRouter(routes)} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default App;
