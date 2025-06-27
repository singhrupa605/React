import { useState, useEffect } from "react";
import { RESTAURANTS_API } from "../assets/constants";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const fetchData = async () => {
    const dataObj = await fetch(RESTAURANTS_API)
    const d = await dataObj?.json();
    // console.log(d)
    let res = d?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurants(res);
    setFilteredList(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

   return {restaurants , setRestaurants,searchText, setSearchText, filteredList, setFilteredList }
};

export default useRestaurants;
