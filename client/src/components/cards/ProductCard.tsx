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
  orderButton,
}) => {
  return (
    <div className="p-2 w-[250px] h-[max-content] mb-6 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-100 ease-in-out">
      <div className="h-40 w-full">
        <img
          className="rounded-md w-full h-full object-cover"
          src={productPict}
          alt="product image"
        />
      </div>

      <div className="">
        <a href="#">
          <p className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {productName}
          </p>
        </a>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 h-[2rem]">
          lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <span className="text-sm text-red-600 dark:text-white">{price}</span>
        <button
          onClick={orderButton}
          type="button"
          className="w-full text-white bg-gradient-to-r from-[#e17f84] via-[#e0595f] to-[#e03a42] hover:opacity-80 click:opacity-50 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
