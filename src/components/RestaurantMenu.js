import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { REST_URL } from "../assets/constants";
import Shimmer from "./Shimmer";
import Dish from "./Dish";
import ToggleButton from "./ToggleButton";
const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const { resId } = useParams();
  const [resData, setResData] = useState(null);
  const [filteredMenu, setFilteredMenu] = useState([]);

  const fetchMenu = async () => {
    const menuData = await fetch(REST_URL + resId);
    const json = await menuData.json();
    const resInfo = json?.data?.cards[2]?.card?.card?.info;
    setResData(resInfo);
    const dishes =
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const foodList = dishes.slice(3, dishes.length - 2);
    const allItemCards = getAllItemCards(foodList);
    setMenu(allItemCards);
    setFilteredMenu(allItemCards);
  };

  const getAllItemCards = (list) => {
    const categories = list
      .map((obj) => obj.card?.card?.categories || null)
      .filter(Boolean);
    let combinedArr = categories
      .map((ar) => {
        return ar;
      })
      .flat();

    const itemCards = list
      .map((obj) => {
        let items = obj?.card?.card;
        if (!items.categories && items.itemCards) {
          return items;
        }
        return null;
      })
      .filter(Boolean);

    let result = [...combinedArr, ...itemCards];
    return result;
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
        <ToggleButton
          setData={setFilteredMenu}
          originalData={menu}
        />
        {
        filteredMenu.map((dish) => {
          return <Dish key={dish.categoryId} dish={dish} />;
        })}
      </div>
      {console.log("******************************************")}
    </div>
  );
};

export default RestaurantMenu;
