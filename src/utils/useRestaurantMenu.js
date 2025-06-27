import { useState, useEffect } from "react";
import { REST_URL } from "../assets/constants";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState([]);
  const [resData, setResData] = useState(null);
  const [filteredMenu, setFilteredMenu] = useState([]);

  const fetchMenu = async () => {
    const menuData = await fetch(REST_URL + resId);
    const json = await menuData.json();
    // console.log(json)
    const resInfo = json?.data?.cards[2]?.card?.card?.info;
    setResData(resInfo);
    const dishes =
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log( json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const foodList = dishes.slice(3, dishes.length - 2);
    const allItemCards = getAllItemCards(foodList);
    setMenu(allItemCards);
    setFilteredMenu(allItemCards);
  };

  //Extracting ItemCards to display dishes under each category

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

  return { menu: menu, filteredMenu: filteredMenu, resData: resData, setFilteredMenu : setFilteredMenu };
};

export default useRestaurantMenu;
