import axios from "axios";
import { ProductListCart } from "../../components/cartPage/ProductListCart";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useQuery } from "@tanstack/react-query";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LocationMap } from "../../components/map/LocationMap";

export const CartPage = () => {
  const userProfile = useSelector((state: RootState) => state.userProfile);
  /** fetch cart data */
  const fetchCart = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/cart/${userProfile.id}`
    );
    return response.data;
  };

  const { data, isLoading /*, error*/ } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });
  /** fetch cart data */

  console.log(data?.products.length);
  // const test = data?.products[0].product;
  if (isLoading) {
    return <>Loading...</>;
  }
  if (!data) {
    return <>No cart data</>;
  }
  if (data?.products.length === 0) {
    return (
      <div className="container h-full flex sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl my-16 items-center justify-center">
        <Icon icon="solar:cart-3-linear" className="w-40 h-40 text-[#e0595f]" />
        <div className="text-3xl ">
          <p>Your cart is empty...</p>
          <p>Please add some of our partner products to your cart :)</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl my-16 flex flex-row justify-between">
      <div className="flex-col items-center justify-center w-full">
        <h1 className="text-3xl font-bold">Mako Bakery</h1>
        {/* location input */}
        <LocationMap />

        {/* <div className="mt-10">
          <div>
            <label
              htmlFor="location-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Delivery location
            </label>
            <div className="flex">
              <input
                type="text"
                id="location-input"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button className="bg-gray-800 inline-flex items-center justify-center px-4 py-2 hover:bg-gray-900 rounded-lg w-auto ms-10">
                <p className="text-white text-sm font-bold whitespace-nowrap">
                  Select on Map
                </p>
              </button>
            </div>
          </div>
        </div> */}

        {/*iitem list */}
        <div className="mt-10 flex">
          <div className="flex-[8] mr-4">
            <ul>
              {data?.products.map((item: any, index: number) => (
                <ProductListCart
                  key={index}
                  name={item.product.name}
                  image={item.product.image}
                  price={item.product.price}
                  quantity={item.quantity}
                />
              ))}
            </ul>
          </div>

          {/* total price */}
          <div className="flex-[4] ms-20 bg-white p-4 rounded-xl">
            <ul>
              <li>
                <div className="flex justify-between w-full border-t-2 border-gray-400 py-2">
                  <div>
                    <p>Subtotal</p>
                    <p>Qty</p>
                    <p>Delivery Fee</p>
                  </div>
                  <div>
                    <p className="text-red-500">
                      {data?.products.length === 0
                        ? 0
                        : data?.products
                            .map(
                              (item: any) => item.product.price * item.quantity
                            )
                            .reduce((a: number, b: number) => a + b, 0)}
                    </p>
                    <p>{data?.products.length}</p>
                    <p className="text-red-500">Free</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex border-t-2 border-gray-400 py-2 justify-between">
                  <div>
                    <p className="font-bold text-red-500">Total</p>
                  </div>
                  <div>
                    <p className="font-bold text-red-500">
                      {" "}
                      {data?.products.length === 0
                        ? 0
                        : data?.products
                            .map(
                              (item: any) => item.product.price * item.quantity
                            )
                            .reduce((a: number, b: number) => a + b, 0)}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end items-center w-full mt-10">
          <button className="bg-gray-800 px-10 py-2 hover:bg-gray-900 rounded-lg">
            <p className="text-white text-sm font-bold">Order</p>
          </button>
        </div>
      </div>
    </div>
  );
};

// import { useState } from "react";
// import { ProductListCart } from "../../components/cartPage/ProductListCart";

// type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// };

// const initialCart: CartItem[] = [
//   { id: 1, name: "Item 1", price: 10, quantity: 1 },
//   { id: 2, name: "Item 2", price: 20, quantity: 2 },
// ];

// export const CartPage = () => {
//   const [cart, setCart] = useState<CartItem[]>(initialCart);

//   // Handle increment
//   const incrementQuantity = (id: number) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   // Handle decrement
//   const decrementQuantity = (id: number) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   // Calculate total
//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div>
//       <h1>Cart</h1>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.price} x {item.quantity}
//             <button onClick={() => decrementQuantity(item.id)}>-</button>
//             <button onClick={() => incrementQuantity(item.id)}>+</button>
//           </li>
//         ))}
//       </ul>
//       <h2>Total: ${total}</h2>
//     </div>
//   );
// };
