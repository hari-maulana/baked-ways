import { useState, useEffect } from "react";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* top nav */}
      <div
        id="nav"
        className="flex flex-row justify-between bg-gray-100 px-4 py-2 align-baseline h-16 shadow-lg"
      >
        {/* logo */}
        <div className="flex items-center justify-center h-[100%]">
          <img className="h-[100%] bg-cover" src="assets/logo.png" alt="" />
        </div>

        {/* right nav */}
        <div className="flex items-center justify-center h-[100%] gap-2">
          <button className="bg-gray-900 px-4 py-2 hover:bg-gray-500 rounded-lg">
            <p className="text-white text-sm font-bold">LOGIN</p>
          </button>
          <button className="bg-gray-900 px-4 py-2 hover:bg-gray-500 rounded-lg">
            <p className="text-white text-sm font-bold">SIGN UP</p>
          </button>
        </div>
      </div>

      <div
        id="top"
        className="bg-yellow-400 h-[40vh] flex items-center justify-center"
      >
        <div className="w-[500px] mr-3">
          <p className="text-3xl">Cravings for baked goods?</p>
          <p className="text-3xl">Exclusive express delivery only for you!</p>
          <div className="flex items-center justify-between gap-2">
            <div className="bg-black w-[200px] h-[2px] self-start mt-3"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              nihil obcaecati doloribus voluptas quo expedita consequuntur
            </p>
          </div>
        </div>
        <img className="h-[100%]" src="assets/landing-image.png" alt="" />
      </div>

      <div
        id="bottom"
        className="bg-[#f3f3f3] h-[max-content] flex items-center justify-center"
      >
        <div>
          <div id="popular" className="mb-10 mt-10">
            <p className="text-3xl mb-3">Popular bakeries</p>
            <div id="container" className="flex gap-4">
              <img
                className="w-[210px] h-[60px] px-2 py-4 rounded-md bg-white object-contain"
                src="https://clairmontcake.co.id/wp-content/uploads/2021/08/logo-header.png"
                alt=""
              />
              <img
                className="w-[210px] h-[60px] px-2 py-4 rounded-md bg-white object-contain"
                src="https://clairmontcake.co.id/wp-content/uploads/2021/08/logo-header.png"
                alt=""
              />
              <img
                className="w-[210px] h-[60px] px-2 py-4 rounded-md bg-white object-contain"
                src="https://clairmontcake.co.id/wp-content/uploads/2021/08/logo-header.png"
                alt=""
              />
              <img
                className="w-[210px] h-[60px] px-2 py-4 rounded-md bg-white object-contain"
                src="https://clairmontcake.co.id/wp-content/uploads/2021/08/logo-header.png"
                alt=""
              />
            </div>
          </div>
          <div id="near mb-10">
            <p className="text-3xl mb-3">Bakeries near you</p>
            <div id="container" className="flex gap-4 mb-10">
              {/* card */}
              <div className=" w-[210px] h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="h-40 w-full">
                  <img
                    className="p-2 rounded-t-lg w-full h-full object-cover"
                    src="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
                    alt="product image"
                  />
                </div>

                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                      Mako Bakery
                    </h5>
                  </a>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900 dark:text-white">
                      0.6 km
                    </span>
                  </div>
                </div>
              </div>

              <div className=" w-[210px] h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="h-40 w-full">
                  <img
                    className="p-2 rounded-t-lg w-full h-full object-cover"
                    src="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
                    alt="product image"
                  />
                </div>

                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                      Mako Bakery
                    </h5>
                  </a>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900 dark:text-white">
                      0.6 km
                    </span>
                  </div>
                </div>
              </div>

              <div className=" w-[210px] h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="h-40 w-full">
                  <img
                    className="p-2 rounded-t-lg w-full h-full object-cover"
                    src="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
                    alt="product image"
                  />
                </div>

                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                      Mako Bakery
                    </h5>
                  </a>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900 dark:text-white">
                      0.6 km
                    </span>
                  </div>
                </div>
              </div>

              <div className=" w-[210px] h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="h-40 w-full">
                  <img
                    className="p-2 rounded-t-lg w-full h-full object-cover"
                    src="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
                    alt="product image"
                  />
                </div>

                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                      Mako Bakery
                    </h5>
                  </a>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900 dark:text-white">
                      0.6 km
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <h1 className="text-3xl font-bold">Persistent Dark Mode Example</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Toggle Dark Mode
      </button> */
}
