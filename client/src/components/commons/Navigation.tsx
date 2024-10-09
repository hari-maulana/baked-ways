import { Icon } from "@iconify/react";

export const Navigation = () => {
  return (
    <>
      {/* top nav */}
      <div
        id="nav"
        className="flex flex-row justify-between bg-yellow-400 px-4 py-2 align-baseline h-16 shadow-lg mb-2"
      >
        {/* logo */}
        <div className="flex items-center justify-center h-[100%]">
          <img className="h-[100%] bg-cover" src="assets/logo.png" alt="" />
        </div>

        {/* right nav */}
        <div className="flex items-center justify-center h-[100%] gap-2">
          <Icon icon="solar:cart-3-linear" className="w-8 h-8" />

          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Rounded avatar"
          />

          {/* <button className="bg-gray-800 px-4 py-2 hover:bg-gray-900 rounded-lg">
            <p className="text-white text-sm font-bold">LOGIN / SIGN UP</p>
          </button> */}
        </div>
      </div>
    </>
  );
};
