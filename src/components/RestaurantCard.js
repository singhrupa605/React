import { CDN_URL } from "../assets/constants";

const RestaurantCard = ({ resData }) => {
  // console.log(resData);
  const { name, cuisines, avgRating, sla, locality } = resData;
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
        <h3>{name}</h3>
        <div className="dot-parent">
          <h4>⭐{avgRating}</h4>
          <div className="dot"></div>
          <h4>
            {sla.deliveryTime} - {sla.deliveryTime + 5} minutes
          </h4>
        </div>
        <h4>{locality}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
