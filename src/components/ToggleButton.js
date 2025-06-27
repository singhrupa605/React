const ToggleButton = ({ setData, originalData }) => {
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
          return {
            ...ob,
            itemCards: filteredItems,
          };
        } else {
          return null; // mark for filtering out later
        }
      })
      .filter(Boolean); // Remove nulls
    setData(result);
  };

  const handleVegFilter = (e) => {
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
    setData(result);
  };

  const handleNonVegToggle = (e) => {
    handleNonVegFilter(e);
  };

  const handleVegToggle = (e) => {
    handleVegFilter(e);
  };

  const handleAllButton = () => {
    setData(originalData);
  };

  return (
    <div>
      <div className="toggle-wrapper flex gap-4 p-4 text-gray-600 font-semibold">
        <button
          id="veg"
          onClick={handleVegToggle}
          className="transition-transform duration-100 ease-in-out active:scale-105 cursor-pointer text-gray-900 bg-gradient-to-r from-yellow-20 to-orange-200 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          🥗 Veg
        </button>
        <button
          id="non-veg"
          onClick={handleNonVegToggle}
          className="transition-transform duration-100 active:scale-105 cursor-pointer text-gray-900 bg-gradient-to-r from-yellow-20 to-orange-200 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          🍗 Non-Veg
        </button>
        <button
          onClick={handleAllButton}
          className="transition-transform duration-100 active:scale-105 cursor-pointer text-gray-900 bg-gradient-to-r from-yellow-20 to-orange-200 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          All
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
