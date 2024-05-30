import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ({ }) => {
    const { resId } = useParams();
    const resInfo = useRestaurantmenu(resId);
    function checkData(regularData) {
        const itemCards = [];
        regularData.forEach((v, k) => {
            if ('itemCards' in v.card.card) {
                itemCards.push(v.card.card.itemCards);
            }
        });
        return itemCards;
    }
    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info ?? {};
    let regularData = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];
    const itemCards = checkData(regularData);
    if (resInfo === null) return <Shimmer />
    return (
        <div>
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")}- {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map(itemCardData => {
                        return itemCardData.map((item, index) => {
                            let info = item.card?.info;
                            return (
                                <li key={index}>
                                    {info.name + "Rs. "}{info.price / 100 || info.defaultPrice / 100}
                                </li>
                            )
                        })
                    })
                }

            </ul>
        </div>

    )

}
export default RestaurantMenu;