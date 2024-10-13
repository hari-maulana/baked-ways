import { useState } from "react";

export const Dropdown = ({ handleLogout }: { handleLogout: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <a
        onClick={() => setIsOpen(!isOpen)}
        className=" hover:bg-blue-700 cursor-pointer focus:outline-none"
      >
        <img
          className="w-10 h-10 rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Rounded avatar"
        />
      </a>

      {isOpen && (
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
          <div className="py-1">
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
            {/* <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 3
            </a> */}
          </div>
        </div>
      )}
    </div>
  );
};
