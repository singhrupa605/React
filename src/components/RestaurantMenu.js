import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { REST_URL } from "../assets/constants";
import Shimmer from "./Shimmer";
import Dish from "./Dish";
const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const { resId } = useParams();
  const [resData, setResData] = useState(null);
  const fetchMenu = async () => {
    const menuData = await fetch(REST_URL + resId);
    const json = await menuData.json();
    const resInfo = json?.data?.cards[2]?.card?.card?.info;
    setResData(resInfo);
    const dishes =
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setMenu(dishes.slice(3, dishes.length - 2));
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  if (!menu.length || !resData) return <Shimmer />;

  const { avgRating, name, locality, cuisines, costForTwoMessage, sla } =
    resData;
  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <div className="res-data">
        <div className="sla-parent">
          <h4 className="res-intro">⭐{avgRating}</h4>
          <div className="dot"></div>
          <h4>{costForTwoMessage}</h4>
        </div>
        <h5 style={{ color: "orange" }}>{cuisines}</h5>
        <h4 className="res-intro">
          {sla.minDeliveryTime} - {sla.maxDeliveryTime + 5} minutes
        </h4>
        <h4 className="res-intro">{locality}</h4>
      </div>
      <div>
        {menu.map((dish) => {
          let item = dish.card.card;
          return <Dish key={item.categoryId} dish={item} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
