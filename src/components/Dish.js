import ItemCard from "./ItemCard";

const Dish = ({ dish }) => {

  const { title, itemCards } = dish;
  
  //console.log(dish)
  return (
    <div className="dish-container">
      <div className="top-bar"></div>
      <div>
        {itemCards?.length ? (
          <div>
            <h1 className="title">{title}</h1>
            {itemCards.map((item, index) => {
              let info = item.card.info;
              return (
                <div key={info.id}>
                  {index === itemCards.length - 1 ? (
                    <ItemCard key={info.id} item={item} />
                  ) : (
                    <div key={info.id}>
                      <ItemCard item={item} />{" "}
                      <div className="bottom-bar"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dish;
