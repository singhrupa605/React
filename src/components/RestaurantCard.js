import { CDN_URL } from "../assets/constants";

const RestaurantCard = ({resData}) => {
 
  return (
    <div className="res-card">
      <div className="image-container">
        <img
           src={CDN_URL + resData.cloudinaryImageId}
  
          alt="Delicious Food"
          height="auto"
        ></img>
      </div>
      <div className="res-name">
        <h3>{resData.name}</h3>
        <h4>{resData.cuisines.join(" , ")}</h4>
        <h4>{resData.avgRating}⭐</h4>
        <h4>{resData.costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
