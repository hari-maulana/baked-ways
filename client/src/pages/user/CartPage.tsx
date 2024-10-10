// import { Icon } from "@iconify/react/dist/iconify.js";

// export const CartPage = () => {
//   return (
//     <div className="lg:mx-[16rem] flex-col items-center justify-center mt-20 mb-20">
//       <h1 className="text-3xl font-bold">Mako Bakery</h1>
//       {/* location input */}
//       <div className="mt-10">
//         <div>
//           <label
//             htmlFor="location-input"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Delivery location
//           </label>
//           <div className="flex">
//             <input
//               type="text"
//               id="location-input"
//               className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             />
//             <button className="bg-gray-800 inline-flex items-center justify-center px-4 py-2 hover:bg-gray-900 rounded-lg w-auto ms-10">
//               <p className="text-white text-sm font-bold whitespace-nowrap">
//                 Select on Map
//               </p>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/*iitem list */}
//       <div className="mt-10 flex">
//         <div className="flex-[8] mr-4">
//           <ul>
//             <li>
//               <div className="flex border-t-2 border-gray-500 py-2 justify-between">
//                 <div className="flex">
//                   <img
//                     className="h-20 w-20 rounded-md"
//                     src="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
//                     alt="product image"
//                   />
//                   <div className="ms-4">
//                     <p>Rendang Floss</p>
//                     <div className="flex gap-2">
//                       <button className="text-red-500 w-4 font-bold hover:bg-red-50  transition-all duration-100 ease-in-out  active:bg-gray-400 active:scale-95">
//                         <Icon icon="ic:baseline-minus" />
//                       </button>
//                       <p className=" text-center bg-gray-200 px-2 rounded-sm">
//                         1
//                       </p>
//                       <button className="text-green-500 w-4 font-bold hover:bg-green-50 transition-all duration-100 ease-in-out  active:bg-gray-400 active:scale-95">
//                         <Icon icon="ic:baseline-plus" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-between">
//                   <p>7.000</p>
//                   <button className="mt-2 text-red-500 font-bold hover:text-red-700 transition-all duration-100 ease-in-out active:text-gray-400 active:scale-95">
//                     <Icon icon="mdi:trash-can-outline" fontSize={25} />
//                   </button>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div className="flex border-t-2 border-gray-500 py-2 justify-between">
//                 <div className="flex">
//                   <img
//                     className="h-20 w-20 rounded-md"
//                     src="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
//                     alt="product image"
//                   />
//                   <div className="ms-4">
//                     <p>Rendang Floss</p>
//                     <div className="flex gap-2">
//                       <button className="text-red-500 w-4 font-bold hover:bg-red-50  transition-all duration-100 ease-in-out  active:bg-gray-400 active:scale-95">
//                         <Icon icon="ic:baseline-minus" />
//                       </button>
//                       <p className=" text-center bg-gray-200 px-2 rounded-sm">
//                         1
//                       </p>
//                       <button className="text-green-500 w-4 font-bold hover:bg-green-50 transition-all duration-100 ease-in-out  active:bg-gray-400 active:scale-95">
//                         <Icon icon="ic:baseline-plus" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-between">
//                   <p>7.000</p>
//                   <button className="mt-2 text-red-500 font-bold hover:text-red-700 transition-all duration-100 ease-in-out active:text-gray-400 active:scale-95">
//                     <Icon icon="mdi:trash-can-outline" fontSize={25} />
//                   </button>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div className="flex border-t-2 border-gray-500 py-2 justify-between">
//                 <div className="flex">
//                   <img
//                     className="h-20 w-20 rounded-md"
//                     src="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
//                     alt="product image"
//                   />
//                   <div className="ms-4">
//                     <p>Rendang Floss</p>
//                     <div className="flex gap-2">
//                       <button className="text-red-500 w-4 font-bold hover:bg-red-50  transition-all duration-100 ease-in-out  active:bg-gray-400 active:scale-95">
//                         <Icon icon="ic:baseline-minus" />
//                       </button>
//                       <p className=" text-center bg-gray-200 px-2 rounded-sm">
//                         1
//                       </p>
//                       <button className="text-green-500 w-4 font-bold hover:bg-green-50 transition-all duration-100 ease-in-out  active:bg-gray-400 active:scale-95">
//                         <Icon icon="ic:baseline-plus" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-between">
//                   <p>7.000</p>
//                   <button className="mt-2 text-red-500 font-bold hover:text-red-700 transition-all duration-100 ease-in-out active:text-gray-400 active:scale-95">
//                     <Icon icon="mdi:trash-can-outline" fontSize={25} />
//                   </button>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>

//         {/* total price */}
//         <div className="flex-[4] ms-20">
//           <ul>
//             <li>
//               <div className="flex justify-between w-full border-t-2 border-gray-500 py-2">
//                 <div>
//                   <p>Subtotal</p>
//                   <p>Qty</p>
//                   <p>Ongkir</p>
//                 </div>
//                 <div>
//                   <p className="text-red-500">14.000</p>
//                   <p>3</p>
//                   <p className="text-red-500">10.000</p>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div className="flex border-t-2 border-gray-500 py-2 justify-between">
//                 <div>
//                   <p className="font-bold text-red-500">Total</p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-red-500">14.000</p>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="flex justify-end items-center w-full mt-10">
//         <button className="bg-gray-800 px-10 py-2 hover:bg-gray-900 rounded-lg">
//           <p className="text-white text-sm font-bold">Order</p>
//         </button>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const initialCart: CartItem[] = [
  { id: 1, name: "Item 1", price: 10, quantity: 1 },
  { id: 2, name: "Item 2", price: 20, quantity: 2 },
];

export const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  // Handle increment
  const incrementQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Handle decrement
  const decrementQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => decrementQuantity(item.id)}>-</button>
            <button onClick={() => incrementQuantity(item.id)}>+</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
    </div>
  );
};
