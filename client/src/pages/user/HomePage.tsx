import axios from "axios";
import { BakeryLogo } from "../../components/commons/BakeryLogo";
import { useQuery } from "@tanstack/react-query";
import { BakeryCard } from "../../components/cards/BakeryCard";

export default function HomePage() {
  /** fetch data */
  const fetchBakeries = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/bakeries`
    );
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
    <div className=" bg-[#f3f3f3] text-black dark:bg-gray-900 dark:text-white">
      <div
        id="top"
        className=" h-[max-content] flex items-center justify-center w-[97%] mx-auto mt-2"
      >
        <img
          className="object-cover h-[100%] rounded-md"
          src="https://res.cloudinary.com/circlehmhm/image/upload/v1729187691/Dessert_Cake_Store_Promotions_Banner_3_vjul5g.png"
          alt=""
        />
      </div>

      <div
        id="bottom"
        className=" h-[max-content] flex items-center justify-center"
      >
        <div>
          <div id="popular" className="mb-10 mt-10">
            <p className="text-3xl mb-3">Popular bakeries</p>
            <div id="container" className="flex gap-10 flex-wrap">
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
            <div id="container" className="flex gap-10 mb-10">
              {data?.bakeries?.map((bakery: any, index: number) => (
                <BakeryCard
                  key={index}
                  bakeryId={bakery?.id}
                  productPict={bakery?.image}
                  bakeryName={bakery?.name}
                  distance="1.1 km"
                />
              ))}
              <BakeryCard
                productPict="https://media-cdn.tripadvisor.com/media/photo-s/0f/cd/54/fa/img-20170707-wa0001-largejpg.jpg"
                bakeryName="Moms Asna Bakery"
                distance="1.1 km"
                bakeryId={1}
              />
              <BakeryCard
                productPict="https://cdn.vox-cdn.com/thumbor/NGFY2u5Gi4-elsDW_KB7IMfQAxg=/0x0:2000x1333/1200x675/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/73579666/Mr_T_Cafe_14.0.jpg"
                bakeryName="Mr. Cake & Cookies"
                distance="1.1 km"
                bakeryId={1}
              />
              <BakeryCard
                productPict="https://www.simplyrecipes.com/thmb/tR-5eHAZ3lgNR6Yvu3yxdHMNpk8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Banana-Bread-LEAD-2-2-63dd39af009945d58f5bf4c2ae8d6070.jpg"
                bakeryName="Aruna Bakery"
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
