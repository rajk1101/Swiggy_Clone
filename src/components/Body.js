import RestaurantCard from "./RestaurantCard.js";
import "../index.js";
import '../index.css';
// import resList from "../utils/mockData.js";
import { useEffect, useState } from "react";
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  // const [myrestaurant, setMyNewRestaurant] = useState();
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7057575&lng=77.2122457&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await response?.json();
    console.log(
      result.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
      "CARDS"
    );
    //Optional Chaining
    setListOfRestaurant(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    setFilteredRestaurant(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      .restaurants);
    // console.log(myrestaurant)
  };
  // Conditional Rendering  := A rendering on the basis of condition is known as conditional rendering
  // if(listOfRestaurant.length===0){
  //   return <Shimmer/>
  // }
  return listOfRestaurant.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="searchBox" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
          <button onClick={() => {
            const filteredRestaurant1 = listOfRestaurant.filter((res) => res.info?.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
            console.log(searchText)
            setFilteredRestaurant(filteredRestaurant1)
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      {/* <div className="res-container">
        {listOfRestaurant.map((val) => (
          <RestaurantCard key={val.card.card.info.id} resData={val} />
        ))}
      </div> */}
      <div className="res-container">
        {filteredRestaurant?.map((val) => {
          return <Link key={val?.info?.id} to={"/restaurant/"+val?.info?.id}><RestaurantCard  resData={val} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
