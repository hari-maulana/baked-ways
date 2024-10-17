import React from "react";

interface UnpricedCardProps {
  productPict: string;
  bakeryName: string;
  distance: string;
  bakeryId: number;
}

export const UnpricedCard: React.FC<UnpricedCardProps> = ({
  productPict,
  distance,
  bakeryName,
  bakeryId,
}) => {
  return (
    <a
      href={bakeryId > 0.1 ? `/menu/${bakeryId}` : `#`}
      className=" w-[250px] h-60 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-all duration-100 ease-in-out active:text-gray-400 active:bg-gray-300"
    >
      <div className="h-40 w-full">
        <img
          className="p-2 rounded-t-xl w-full h-full object-cover"
          src={productPict}
          alt="product image"
        />
      </div>

      <div className="px-5 pb-5">
        <div>
          <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
            {bakeryName} id: {bakeryId}
          </h5>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-900 dark:text-white">
            {distance}
          </span>
        </div>
      </div>
    </a>
  );
};
