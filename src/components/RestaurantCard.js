import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    resData: { info },
  } = props;

  const { id, cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    info;

  return (
    <Link to={`/restaurants/${id}`} className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="logo" className="res-img" />
      <div className="info">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <h4>{avgRating} ⭐</h4>
        <h5>{costForTwo}</h5>
        <p>{sla.deliveryTime} MINS</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
