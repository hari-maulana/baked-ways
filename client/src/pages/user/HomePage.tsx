import axios from "axios";
import { UnpricedCard } from "../../components/cards/UnpricedCard";
import { BakeryLogo } from "../../components/commons/BakeryLogo";
import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
  /** fetch data */
  const fetchBakeries = async () => {
    const response = await axios.get("http://localhost:3003/bakeries");
    return response.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["bakeries"],
    queryFn: fetchBakeries,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;
  console.log(data);

  return (
    <div className=" bg-white text-black dark:bg-gray-900 dark:text-white">
      <div
        id="top"
        className="bg-yellow-400 h-[40vh] flex items-center justify-center w-[100vw]"
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
            <div id="container" className="flex gap-4 flex-wrap">
              <BakeryLogo
                bakeryName="Mako Bakery"
                source="https://www.makobakery.com/assets/img/contact/logo-mako-contact-page.png"
              />

              <BakeryLogo
                bakeryName="Holland Bakery"
                source="https://ugc.production.linktr.ee/Javo8j1YT9aCl0iuxl9m_J1hxK2BEZlh2XrUp?io=true&size=avatar-v3_0"
              />

              <BakeryLogo
                bakeryName="The Harvest"
                source="https://scontent.fcgk6-3.fna.fbcdn.net/v/t39.30808-6/437751945_967816161371514_1122795877301980660_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFwdWMeIo4guEqOoG3Be4yp1FAtkdqe4THUUC2R2p7hMbe2K0YJCmMMj5Dt_jLpi8-OFHbfhEJyMwSEnBkHhi6N&_nc_ohc=SgZl9U0vY3EQ7kNvgEJRpwN&_nc_ht=scontent.fcgk6-3.fna&_nc_gid=AxBItJCcUF1q75ftWkhdF2z&oh=00_AYCx6ifClscgX613Er9NAWD_7yaP9a7p8EAv12QCR5VfLQ&oe=670C0059"
              />

              <BakeryLogo
                bakeryName="Roti O"
                source="https://res.cloudinary.com/circlehmhm/image/upload/v1728459306/roti_o_pi4g3z.jpg"
              />
            </div>
          </div>
          <div id="near mb-10">
            <p className="text-3xl mb-3">Bakeries near you</p>
            <div id="container" className="flex gap-4 mb-10">
              {data?.bakeries?.map((bakery: any, index: number) => (
                <UnpricedCard
                  key={index}
                  bakeryId={bakery?.id}
                  productPict={bakery?.image}
                  bakeryName={bakery?.name}
                  distance="1.1 km"
                />
              ))}
              <UnpricedCard
                productPict="https://assets.makobakery.com/cdn/web/product/1669019447_rendang-floss.JPG"
                bakeryName="Mako Bakery"
                distance="1.1 km"
                bakeryId={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
