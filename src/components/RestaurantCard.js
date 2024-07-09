
import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = ({resData}) => {
  // console.log(resData.info,"Data")
  const {loggedInuser}=useContext(UserContext)

    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
    } = resData?.info;
    // console.log(cloudinaryImageId)
    return (
      <div className="m-4 p-4 w-[250px] h-[515px] rounded-md bg-gray-100 hover:bg-gray-200" >
        <img
          className="rounded-lg"
          alt="res-logo"
          src={ CDN_URL
             +
            cloudinaryImageId }
        />
        <h3 className="font-bold font-serif py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h5>{costForTwo}</h5>
        <h6>{resData?.info?.sla?.slaString}</h6>
        <h6>User: {loggedInuser}</h6>
      </div>
    );
  };

  //Higher Order Function
  //input -RestaurantCard  ==>  RestaurantCardPromoted
  export const withPromotedLabel=(RestaurantCard)=>{
    return ()=>{
      return(<>
        <label>Promoted</label>
        <RestaurantCard/>
        </>
      )
    }
  }
export default RestaurantCard;  