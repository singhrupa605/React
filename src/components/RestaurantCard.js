import { CDN_URL } from "../assets/constants";

const RestaurantCard = ({ resData }) => {
  // console.log(resData);
  const { name, avgRating, sla, locality } = resData;
  return (
    <div className="bg-amber-50 rounded-b-sm drop-shadow-sm">
      <div className="image-container">
        <img
          src={CDN_URL + resData.cloudinaryImageId}
          className="rounded-t-sm w-70 h-70"
          alt="Delicious Food"
        ></img>
      </div>
      <div className="p-4 flex flex-col gap-1.5">
        <h3>{name}</h3>
        <div className="flex items-center gap-1">
          <h4>⭐{avgRating}</h4>
          <div className="h-[5px] w-[5px] bg-gray-600 rounded-full"></div>
          <h4>
            {sla.deliveryTime} - {sla.deliveryTime + 5} minutes
          </h4>
        </div>
        <h4>{locality}</h4>
      </div>
    </div>
  );
};

export const getCardWithLabel = (RestaurantCard) =>
   {
  return (props) => {
    return (
      <div className="relative">
        <label className="bg-black text-gray-50 px-3 py-1 z-20 absolute transform translate -translate-x-2">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
