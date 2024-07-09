
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.js";
import "../index.js";
import '../index.css';
// import resList from "../utils/mockData.js";
import { useEffect, useState, useContext } from "react";
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const { loggedInuser, setUsername } = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7057575&lng=77.2122457&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await response?.json();
    setListOfRestaurant(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like you're Offline!! Please check your internet connection</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <input 
            type="text" 
            className="border border-solid border-black p-2 mb-2 md:mb-0 md:mr-2" 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} 
            placeholder="Search Restaurants" 
          />
          <button 
            className="px-4 py-2 bg-green-100 rounded-lg mb-2 md:mb-0 md:mr-2" 
            onClick={() => {
              const filteredRestaurant1 = listOfRestaurant.filter((res) => res.info?.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurant(filteredRestaurant1);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-center">
          <label className="mb-2 md:mb-0 md:mr-2">Username:</label>
          <input 
            className="p-2 bg-gray-100 border border-black rounded-md" 
            value={loggedInuser} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant?.map((val) => (
          <Link key={val?.info?.id} to={"/restaurant/" + val?.info?.id}>
            <RestaurantCard resData={val} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

// const Body = () => {
//   const [listOfRestaurant, setListOfRestaurant] = useState([]);
//   // const [myrestaurant, setMyNewRestaurant] = useState();
//   const [searchText, setSearchText] = useState("");
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//   const {loggedInuser,setUsername}=useContext(UserContext);


// const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     const response = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7057575&lng=77.2122457&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const result = await response?.json();
//     console.log(
//       result.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
//       "CARDS"
//     );
//     //Optional =
//     setListOfRestaurant(
//       result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
//         .restaurants
//     );
//     setFilteredRestaurant(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
//       .restaurants);
//     console.log(listOfRestaurant)
//   };
//   const onlineStatus = useOnlineStatus();
//   if (onlineStatus === false)
//     return (
//       <h1>Looks like your're Offline!! Please check your internet connection</h1>)
//   // Conditional Rendering  := A rendering on the basis of condition is known as conditional rendering
//   // if(listOfRestaurant.length===0){
//   //   return <Shimmer/>
//   // }
//   return listOfRestaurant.length === 0 ? <Shimmer /> : (
//     <div className="body">
//       <div className="flex">
//         <div className="p-2 m-2 flex">
//           <input type="text" className="border border-solid border-black  m-2" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
//           <button className="px-4  bg-green-100 m-2 rounded-lg cursor-pointer" onClick={() => {
//             const filteredRestaurant1 = listOfRestaurant.filter((res) => res.info?.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
//             console.log(searchText)
//             setFilteredRestaurant(filteredRestaurant1)
//           }}>Search</button>
//           <button
//             className="px-4 bg-gray-200 m-2 rounded-lg cursor-pointer"
//             onClick={() => {
//               const filteredList = listOfRestaurant.filter(
//                 (res) => res.info.avgRating > 4.2
//               );
//               setFilteredRestaurant(filteredList);
//             }}
//           >
//             Top Rated Restaurant
//           </button>
//         </div>
//         <div className=" h-2  rounded-lg cursor-pointer">
//           <label className="rounded-lg ">Username:</label>
//           <input className=" m-6  bg-gray-100 border border-black rounded-md"value={loggedInuser} onChange={(e)=>setUsername(e.target.value)}></input>
//         </div>
//       </div>
//       {/* <div className="res-container">
//         {listOfRestaurant.map((val) => (
//           <RestaurantCard key={val.card.card.info.id} resData={val} />
//         ))}
//       </div> */}
//       <div className="flex flex-wrap">
//         {filteredRestaurant?.map((val) => {
//           return <Link key={val?.info?.id} to={"/restaurant/" + val?.info?.id}>
//             <RestaurantCard resData={val} /></Link>;
//         })}
//       </div>
//     </div>
//   );
// };

// export default Body;
