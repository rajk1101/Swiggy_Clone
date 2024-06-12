
import { CDN_URL } from "../utils/constants";


const RestaurantCard = ({resData}) => {
  // console.log(resData.info,"Data")
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
    } = resData?.info;
    // console.log(cloudinaryImageId)
    return (
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img
          className="res-logo"
          alt="res-logo"
          src={ CDN_URL
             +
            cloudinaryImageId }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h5>{costForTwo}</h5>
        <h6>{resData?.info?.sla?.slaString}</h6>
      </div>
    );
  };
export default RestaurantCard;  