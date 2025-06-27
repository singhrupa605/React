import ItemsList from "./ItemsList";
const Dishes = ({ dish, showItems, onToggle}) => {
  const { title, itemCards} = dish;
   

  const handleToggle = () => 
  {  
      onToggle() 
  };
  //console.log(dish)
  return (
    <div className="dish-container">
      <div>
        {itemCards?.length ? (
          <div>
            <div className="flex justify-between items-center bg-amber-50 p-4 shadow-sm">
              <h1 className="text-md font-bold uppercase tracking-wider">
                {title}
              </h1>
              <button className="shadow transition-transform duration-100 ease-in-out transform hover:scale-110 active:scale-95 hover:bg-orange-200 hover:border-2 border-gray-300 cursor-pointer p-2" onClick={handleToggle}>
                🔽
              </button>
            </div>

            { showItems?
               <ItemsList itemCards={itemCards} showAdd={true}/>
              : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export const getDishesWithBar = (Dish) => {
  return (props) => {
    return (
      <div>
        <div className="bg-gray-100 my-5 p-2"></div>
        <Dish {...props} />
      </div>
    );
  };
};

export default Dishes;
