import { IMG_URL } from "../assets/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";



const ItemCard = ({ item , showAdd}) => {

  
  const { info } = item.card;
  const dispatch = useDispatch();



  const handleAdd = () => {
    dispatch(addItem(item));
  };
   
  
  return (
    <div className="item-card flex py-3 text-gray-700 items-center">
      <div className="item-details w-[85%] flex flex-col">
        <h4 className="font-bold">{info.name}</h4>
        {info.price ? (
          <h5>&#8377;{(info.price / 100).toFixed(2)}</h5>
        ) : (
          <h5>&#8377;{(info.defaultPrice / 100).toFixed(2)}</h5>
        )}
        <p>{info.description}</p>
      </div>
      <div className="item-image-container w-50 flex flex-col items-center relative">
        <img
          className="rounded-lg"
          src={`${IMG_URL}` + `${info.imageId}`}
        ></img>
        {showAdd ? (
          <button
            onClick={handleAdd}
            className="active:bg-amber-400 active:font-bold  focus-visible:text-amber-300 shadow transition-transform duration-100 ease-in-out transform hover:scale-105 active:scale-99 rounded-md px-10 py-1 bg-white cursor-pointer hover:bg-amber-50 hover:border-1 border-gray-300 absolute z-100 top-[84%]"
          >
            Add +{" "}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export const getItemCardWithBar = (ItemCard) => {
  return (props) => {
    return (
      <div>
        <ItemCard {...props} />{" "}
        <div className="bottom-bar border border-gray-100"></div>
      </div>
    );
  };
};
export default ItemCard;
