import { Icon } from "@iconify/react/dist/iconify.js";

export const ProductListCart = () => {
  return (
    <>
      <li>
        <div className="flex border-t-2 border-gray-500 py-2 justify-between">
          <div className="flex">
            <img
              className="h-20 w-20 rounded-md"
              src="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
              alt="product image"
            />
            <div className="ms-4">
              <p>Rendang Floss</p>
              <div className="flex gap-2">
                <button className="text-red-500 w-4 font-bold hover:bg-red-50  transition-all duration-100 ease-in-out  active:bg-gray-400 active:scale-95">
                  <Icon icon="ic:baseline-minus" />
                </button>
                <p className=" text-center bg-gray-200 px-2 rounded-sm">1</p>
                <button className="text-green-500 w-4 font-bold hover:bg-green-50 transition-all duration-100 ease-in-out  active:bg-gray-400 active:scale-95">
                  <Icon icon="ic:baseline-plus" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <p>7.000</p>
            <button className="mt-2 text-red-500 font-bold hover:text-red-700 transition-all duration-100 ease-in-out active:text-gray-400 active:scale-95">
              <Icon icon="mdi:trash-can-outline" fontSize={25} />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
