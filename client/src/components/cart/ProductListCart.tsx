import { Icon } from "@iconify/react/dist/iconify.js";
interface ProductListCartProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export const ProductListCart: React.FC<ProductListCartProps> = ({
  image,
  name,
  price,
  quantity,
}) => {
  return (
    <>
      <li>
        <div className="flex bg-white rounded-lg border-b-2 border-gray-400 py-2 px-3 justify-between mb-3">
          <div className="flex">
            <img
              className="h-20 w-20 rounded-md"
              src={image}
              alt="product image"
            />
            <div className="ms-4">
              <p>{name}</p>
              <div className="flex gap-2 mt-3">
                <button className="text-red-500 w-4 font-bold hover:bg-red-50  transition-all duration-100 ease-in-out  active:bg-gray-400 active:scale-95">
                  <Icon icon="ic:baseline-minus" />
                </button>
                <p className=" text-center bg-gray-200 px-2 rounded-sm">
                  {quantity}
                </p>
                <button className="text-green-500 w-4 font-bold hover:bg-green-50 transition-all duration-100 ease-in-out  active:bg-gray-400 active:scale-95">
                  <Icon icon="ic:baseline-plus" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <p>{price}</p>
            <button className="mt-2 text-red-500 font-bold hover:text-red-700 transition-all duration-100 ease-in-out active:text-gray-400 active:scale-95">
              <Icon icon="mdi:trash-can-outline" fontSize={25} />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
