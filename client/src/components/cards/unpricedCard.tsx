import React from "react";

interface UnpricedCardProps {
  productPict: string;
  bakeryName: string;
  distance: string;
}

export const UnpricedCard: React.FC<UnpricedCardProps> = ({
  productPict,
  distance,
  bakeryName,
}) => {
  return (
    <div className=" w-[210px] h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="h-40 w-full">
        <img
          className="p-2 rounded-t-lg w-full h-full object-cover"
          src={productPict}
          alt="product image"
        />
      </div>

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
            {bakeryName}
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-900 dark:text-white">
            {distance}
          </span>
        </div>
      </div>
    </div>
  );
};
