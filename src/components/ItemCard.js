
import { IMG_URL } from "../assets/constants";

const ItemCard = ({ item }) => {
    const {info} = item.card
  //  console.log(info)
  return (
    <div className="item-card">
        <div className="item-details">
            <h4>{info.name}</h4>
            <h5>&#8377;{(info.price/100).toFixed(2)}</h5>
            <p>{info.description}</p>
        </div>
        <div className="item-image-container">
              <img src={`${IMG_URL}`+`${info.imageId}`}></img>
        </div>
      </div>
         
  );
};

export default ItemCard;
