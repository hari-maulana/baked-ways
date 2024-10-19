import axios from "axios";
import { ProductCard } from "../../components/cards/ProductCard";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const MenuPage = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const userProfile = useSelector((state: RootState) => state.userProfile);

  /** fetch data */
  const fetchProducts = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/bakery/${id}/products`
    );
    return response.data;
  };

  const { data /*isLoading, error*/ } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  /** fetch data */

  /** add product to cart */
  const addProductToCart = async (userCartData: {
    productId: number;
    userId: number;
  }) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/cart`,
      userCartData
    );
    console.log(response.data);
    return response.data;
  };

  const { mutate } = useMutation({
    mutationFn: addProductToCart,
  });
  /** add product to cart */

  const orderButton = (productId: number, userId: number) => {
    mutate({
      productId,
      userId,
    });
    toast.success("Product added to cart");
  };

  return (
    <>
      <div className="bg-[#f3f3f3] h-[max-content] flex items-center justify-center mt-10">
        <div className="container sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl my-16 items-center justify-center">
          <p className="text-3xl mb-5">Mako Bakery id: {id}, Menu's</p>
          <div
            id="container"
            className="flex flex-wrap mb-10 w-full items-center justify-between"
          >
            {data?.products?.length > 0 ? (
              data?.products?.map((product: any, index: number) => (
                <ProductCard
                  key={index}
                  productPict={product?.image}
                  productName={`${product?.name} (${product?.id})`}
                  price={product?.price}
                  orderButton={() => orderButton(product?.id, userProfile?.id)}
                />
              ))
            ) : (
              <p>No products available</p>
            )}
            <ProductCard
              productPict="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
              productName="Rendang Floss"
              price="Rp. 10.000"
              orderButton={() => {}}
            />
            <ProductCard
              productPict="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
              productName="Rendang Floss"
              price="Rp. 10.000"
              orderButton={() => {}}
            />
            <ProductCard
              productPict="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
              productName="Rendang Floss"
              price="Rp. 10.000"
              orderButton={() => {}}
            />
            <ProductCard
              productPict="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
              productName="Rendang Floss"
              price="Rp. 10.000"
              orderButton={() => {}}
            />
            <ProductCard
              productPict="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
              productName="Rendang Floss"
              price="Rp. 10.000"
              orderButton={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
