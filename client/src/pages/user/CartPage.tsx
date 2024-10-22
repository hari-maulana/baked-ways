import axios from "axios";
import { ProductListCart } from "../../components/cartPage/ProductListCart";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useQuery } from "@tanstack/react-query";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LocationMap } from "../../components/map/LocationMap";
import { useState } from "react";
import { toast } from "react-toastify";

export const CartPage = () => {
  const userProfile = useSelector((state: RootState) => state.userProfile);
  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [address, setAddress] = useState<string>("");

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

  /** post order */
  const placeOrder = async () => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/order`, {
      userId: userProfile.id,
      bakeryId: data?.bakeryId,
      address: address,
      location: selected,
    });
    return response.data;
  };
  /** post order */

  const handlePlaceOrder = async () => {
    const response = await placeOrder();
    if (response) {
      toast.success("Order placed successfully");
      console.log(response);
    } else {
      toast.error("Failed to place order");
    }
  };

  if (isLoading) {
    return <>Loading...</>;
  }
  if (!data) {
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
        <LocationMap
          selected={selected}
          setSelected={setSelected}
          address={address}
          setAddress={setAddress}
        />

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
          <button
            className="bg-gray-800 px-10 py-2 hover:bg-gray-900 rounded-lg"
            onClick={handlePlaceOrder}
          >
            <p className="text-white text-sm font-bold">Order</p>
          </button>
        </div>
      </div>
    </div>
  );
};
