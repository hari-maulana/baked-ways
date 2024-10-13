import React from "react";

interface ProductCardProps {
  productPict: string;
  productName: string;
  price: string;
  orderButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  productPict,
  productName,
  price,
}) => {
  return (
    <div className="p-2 w-[210px] h-[max-content] bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-100 ease-in-out">
      <div className="h-40 w-full">
        <img
          className="rounded-md w-full h-full object-cover"
          src={productPict}
          alt="product image"
        />
      </div>

      <div className="">
        <a href="#">
          <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
            {productName}
          </h5>
        </a>
        <span className="text-sm text-red-600 dark:text-white">{price}</span>
        <button
          type="button"
          className="w-full text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 hover:opacity-80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
