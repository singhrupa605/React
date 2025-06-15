import { useState, useEffect } from "react";

const ToggleButton = ({setData, originalData}) => {



  const handleNonVegFilter = (e) => {
    const result = originalData
      .map((ob) => {
        let dishes = ob?.itemCards;
        const filteredItems = dishes.filter((dish) => {
          return (
            dish?.card?.info?.itemAttribute?.vegClassifier?.toLowerCase() ===
            "nonveg"
          );
        });
        if (filteredItems.length > 0) {
          //console.log(filteredItems)
          return {
            ...ob,
            itemCards: filteredItems,
          };
        } else {
          return null; // mark for filtering out later
        }
      })
      .filter(Boolean); // Remove nulls
       console.log(result)
    setData(result);
  };

  const handleVegFilter = (e) => {
      //  console.log(menu)
    const result = originalData
      .map((ob) => {
        let dishes = ob?.itemCards;
        const filteredItems = dishes.filter((dish) => {
          return (
            dish?.card?.info?.itemAttribute?.vegClassifier?.toLowerCase() ===
            "veg"
          );
        });
        if (filteredItems.length > 0) {
          return {
            ...ob,
            itemCards: filteredItems,
          };
        } else {
          return null; // mark for filtering out later
        }
      })
      .filter(Boolean); // Remove nulls
      console.log(result)
    setData(result);
  };

  const handleNonVegToggle = (e) => {
    //setData(menu);
    handleNonVegFilter(e);
  };

  const handleVegToggle = (e) => {
    //setData(menu);
    handleVegFilter(e);
  };

  const handleAllButton = () => {
    setData(originalData);
  };

  return (
    <div>
      <div className="toggle-wrapper">
        <button id="veg" onClick={handleVegToggle}>
          Veg
        </button>
        <button
          id="non-veg"
          onClick={handleNonVegToggle}
        >
          Non-Veg
        </button>
        <button onClick={handleAllButton}>All</button>
      </div>
    </div>
  );
};

export default ToggleButton;
