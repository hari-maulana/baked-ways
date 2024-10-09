import { UnpricedCard } from "../components/cards/UnpricedCard";
import { BakeryLogo } from "../components/commons/BakeryLogo";

export default function LandingPage() {
  //   const [darkMode, setDarkMode] = useState(() => {
  //     return localStorage.getItem("theme") === "dark";
  //   });

  //   useEffect(() => {
  //     if (darkMode) {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("theme", "dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("theme", "light");
  //     }
  //   }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <div
        id="top"
        className="bg-yellow-400 h-[40vh] flex items-center justify-center"
      >
        <div className="w-[500px] mr-3">
          <p className="text-3xl">Cravings for baked goods?</p>
          <p className="text-3xl">Exclusive express delivery only for you!</p>
          <div className="flex items-center justify-between gap-2">
            <div className="bg-black w-[200px] h-[2px] self-start mt-3"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              nihil obcaecati doloribus voluptas quo expedita consequuntur
            </p>
          </div>
        </div>
        <img className="h-[100%]" src="assets/landing-image.png" alt="" />
      </div>

      <div
        id="bottom"
        className="bg-[#f3f3f3] h-[max-content] flex items-center justify-center"
      >
        <div>
          <div id="popular" className="mb-10 mt-10">
            <p className="text-3xl mb-3">Popular bakeries</p>
            <div id="container" className="flex gap-4">
              <BakeryLogo source="https://clairmontcake.co.id/wp-content/uploads/2021/08/logo-header.png" />
              <BakeryLogo source="https://clairmontcake.co.id/wp-content/uploads/2021/08/logo-header.png" />
              <BakeryLogo source="https://clairmontcake.co.id/wp-content/uploads/2021/08/logo-header.png" />
              <BakeryLogo source="https://clairmontcake.co.id/wp-content/uploads/2021/08/logo-header.png" />
            </div>
          </div>
          <div id="near mb-10">
            <p className="text-3xl mb-3">Bakeries near you</p>
            <div id="container" className="flex gap-4 mb-10">
              <UnpricedCard
                productPict="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
                bakeryName="Mako Bakery"
                distance="1.1 km"
              />
              <UnpricedCard
                productPict="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
                bakeryName="Mako Bakery"
                distance="1.1 km"
              />
              <UnpricedCard
                productPict="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
                bakeryName="Mako Bakery"
                distance="1.1 km"
              />
              <UnpricedCard
                productPict="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
                bakeryName="Mako Bakery"
                distance="1.1 km"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <h1 className="text-3xl font-bold">Persistent Dark Mode Example</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Toggle Dark Mode
      </button> */
}
