export const Navigation = () => {
  return (
    <>
      {/* top nav */}
      <div
        id="nav"
        className="flex flex-row justify-between bg-yellow-400 px-4 py-2 align-baseline h-16 shadow-lg"
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
    </>
  );
};
