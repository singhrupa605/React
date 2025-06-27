
import ItemCard from "./ItemCard";
import { getItemCardWithBar } from "./ItemCard";
const ItemsList = ({ itemCards, showAdd }) => {
  const ItemCardWithBar = getItemCardWithBar(ItemCard);


  return (
    <div>
      {itemCards.map((item, index) => {
        let info = item.card.info;
        return (
          <div key={info.id + index}>
            {index >= itemCards.length - 1 ? (
              <ItemCard item={item} showAdd={showAdd} />
            ) : (
              <ItemCardWithBar item={item} showAdd={showAdd} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
