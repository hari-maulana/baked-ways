import { ProductCard } from "../../components/cards/ProductCard";

const MenuPage = () => {
  return (
    <>
      <div className="bg-[#f3f3f3] h-[max-content] flex items-center justify-center mt-10">
        <div>
          <p className="text-3xl mb-5">Mako Bakery, Menu's</p>
          <div id="container" className="flex gap-4 mb-10">
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
