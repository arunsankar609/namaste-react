import { useState } from "react";
import { resturantCard } from "../configs/config";

import RestCard from "./ResturantCard";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState(resturantCard);
  const [searchText, setsearchText] = useState("");

  console.log(searchText);

  const filterData = () => {
    console.log("cscscs", restaurantData);
    console.log("xxxxx", searchText);
    if(searchText===""||null)
      return resturantCard
    
   
    const filteredResturant = restaurantData.filter((resturant) =>
      resturant.data.name
        .toLowerCase()
        .trim()
        .includes(searchText.toLowerCase().trim())
    );

    console.log("what the fuck", filteredResturant);
    return filteredResturant;

  };
  // const onchangeFilter=()=>{
  //   if (searchText === " " || null||"undefined") {
  //     setRestaurantData(" ")
  //     return setRestaurantData(resturantCard);
  //   }
 
  // }

  return (
    <>
      <div className="searchbar">
        
        <input
          className="input-txt"
          type="text"
          placeholder="search your favourites..."
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
            const data = filterData();
            setRestaurantData(data);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData();
            setRestaurantData(data);
          }}
        >
          Search
        </button>
       
      </div>

      <div className="bodyCard">
        {restaurantData?.map((hotel) => {
          return <RestCard restaurant={hotel} key={hotel.data.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
