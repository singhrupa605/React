import RestaurantCard ,{getCardWithLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import { useContext, useEffect } from "react";
import { UserContext } from "../utils/UserContext";

export const Body = () => {
  const {
    restaurants,
    setRestaurants,
    searchText,
    setSearchText,
    filteredList,
    setFilteredList,
  } = useRestaurants();
  
  const RestaurantCardPromotion = getCardWithLabel(RestaurantCard)

  const {loggedInUser, setUserName} = useContext(UserContext)

    
  
  return (
    <div className="w-full flex flex-col gap-3 my-4">
      <div className="w-full">
        <input
          placeholder="search"
          className="boder border border-gray-400 rounded-sm"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} />
       
        <button
          className="bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-sm"
          type="button"
          onClick={() => {
            const filtered = restaurants.filter((rest) => {
              return rest.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredList(filtered);
          }}
        >
          Search
        </button>
        <button onClick={()=>setUserName("Dara Singh")}>{loggedInUser}</button>
      </div>
      {restaurants?.length ? (
        <div className="search">
          <button
            onClick={() => {
              const filteredList = restaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setRestaurants(filteredList);
            }}
          >
            Least Rated Restaurants
          </button>
          <div className="flex flex-wrap gap-10">
            {filteredList.length ? (
              filteredList.map((restaurant) => {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    key={restaurant.info.id}
                    to={"restaurants/" + restaurant.info.id}
                  >
                    {restaurant.info.promoted?<RestaurantCardPromotion resData={restaurant.info}/>:
                    <RestaurantCard resData={restaurant.info} />}
                  </Link>
                );
              })
            ) : (
              <h1>No Restaurants Found</h1>
            )}
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
      
    </div>
  );
};
