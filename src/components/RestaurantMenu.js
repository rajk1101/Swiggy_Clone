import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = ({ }) => {
    const { resId } = useParams();
    const resInfo = useRestaurantmenu(resId);
    const [showItems, setShowItems] = useState(false);
    const [showIndex, setShowIndex] = useState(null);



    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info ?? {};


    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")         //because of @ we write  like this


    if (resInfo === null) return <Shimmer />
    return (
        <div className="text-center bg-gray-100">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(",")}- {costForTwoMessage}
            </p>
            {/* Here We need categories Accordian  */}
            {
                //this is controlled compoenet
                categories.map((category, index) => <RestaurantCategory key={index} data={category?.card?.card}
                    showItems={index === showIndex} setShowIndex={() => { setShowIndex(index === showIndex ? null : index) }} />)
            }

        </div>

    )

}
export default RestaurantMenu;