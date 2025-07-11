import RestaurantCard, { getCardWithLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import { useContext } from "react";
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

  const RestaurantCardPromotion = getCardWithLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="w-full flex flex-col gap-3 my-4">
      <div className="w-full flex flex-row gap-4">
        <input
          placeholder="search"
          className="boder border border-gray-400 rounded-sm"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="active:bg-amber-400 active:font-bold  focus-visible:text-amber-300 shadow transition-transform duration-100 ease-in-out transform hover:scale-105 active:scale-99 rounded-md px-10 py-1 bg-white cursor-pointer hover:bg-amber-50 hover:border-1 border-gray-300 top-[84%]"
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
        <button onClick={() => setUserName("Dara Singh")}>
          {loggedInUser}
        </button>
      </div>
      {restaurants?.length ? (
        <div className="search">
          <button
            className="active:bg-amber-400 active:font-bold  focus-visible:text-amber-300 shadow transition-transform duration-100 ease-in-out transform hover:scale-105 active:scale-99 rounded-md px-10 py-1 bg-white cursor-pointer hover:bg-amber-50 hover:border-1 border-gray-300 top-[84%] my-5"
            onClick={() => {
              const filteredList = restaurants.filter((res) => {
                return res.info.avgRating > 4.5;
              });
              setFilteredList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <div className="flex flex-wrap gap-10">
            {filteredList.length ? (
              filteredList.map((restaurant) => {
                return (
                  <Link
                    data-testid="restaurant-card"
                    style={{ textDecoration: "none" }}
                    key={restaurant.info.id}
                    to={"restaurants/" + restaurant.info.id}
                  >
                    {restaurant.info.promoted ? (
                      <RestaurantCardPromotion resData={restaurant.info} />
                    ) : (
                      <RestaurantCard resData={restaurant.info} />
                    )}
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
