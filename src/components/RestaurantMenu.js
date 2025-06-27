import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Dishes from "./Dishes";
import ToggleButton from "./ToggleButton";
import { getDishesWithBar } from "./Dishes";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const { menu, filteredMenu, resData, setFilteredMenu } =
    useRestaurantMenu(resId);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleToggle = (index) => {
    setCurrentIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const DishesWithBar = getDishesWithBar(Dishes);
  if (!menu.length || !resData) return <Shimmer />;
  const { avgRating, name, locality, cuisines, costForTwoMessage, sla } =
    resData;

  return (
    <div className="res-menu flex justify-center shadow">
      <div className="p-5 flex flex-col gap-4 w-[60%]">
        <h1 className="text-amber-700 font-bold text-3xl">{name}</h1>
        <div className="bg-amber-50 shadow-md p-4 flex flex-col gap-y-2.5 rounded-3xl">
          <div className="sla-parent text-gray-600 font-semibold flex items-center gap-2">
            <h4 className="res-intr">⭐{avgRating}</h4>
            <div className="h-[6px] w-[7px] bg-gray-500 rounded-4xl px-[3px]">
              
            </div>
            <h4>{costForTwoMessage}</h4> 
          </div>
          <h5 style={{ color: "orange", fontWeight: "bolder" }}>{cuisines}</h5>
          <h4 className="res-intro  text-gray-600 font-semibold">
            {sla.minDeliveryTime} - {sla.maxDeliveryTime + 5} minutes
          </h4>
          <h4 className="res-intro text-gray-600 font-semibold">{locality}</h4>
        </div>
        <div className="flex flex-col gap-y-2">
          <ToggleButton setData={setFilteredMenu} originalData={menu} />
          {filteredMenu.map((dish, index) => {
            return (
              <div key={dish.categoryId + index}>
                {index === 0 ? (
                  <Dishes
                    dish={dish}
                    showItems={index === currentIndex}
                    onToggle={() => handleToggle(index)}
                  />
                ) : (
                  <DishesWithBar
                    dish={dish}
                    showItems={index === currentIndex}
                    onToggle={() => handleToggle(index)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
