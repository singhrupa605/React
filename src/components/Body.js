import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, use } from "react";

export const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const fetchData = async () => {
    const dataObj = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=27.87960&lng=78.07620&carousel=true&third_party_vendor=1"
    );

    const d = await dataObj?.json();
    let res =
      d?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurants(res);
    setFilteredList(res);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="body">
      <div className="search-bar">
        <input
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="btn"
          onClick={() => {
            const filtered = restaurants.filter((rest) => {
              return rest.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredList(filtered)
          }}
        >
          Search
        </button>
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
          <div className="res-container">
            {filteredList.length ? (
              filteredList.map((restaurant) => {
                return (
                  <RestaurantCard
                    key={restaurant.info.id}
                    resData={restaurant.info}
                  />
                );
              })
            ) : (
              <h1>No Restaurants Found</h1>
            )}
            {/* <RestaurantCard resData={restaurants[0].info}/> */}
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};
