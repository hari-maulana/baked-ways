import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import routes from "./routes/Routes";

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={createBrowserRouter(routes)} />
      {/* <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          /> */}
    </>
  );
};

export default App;
