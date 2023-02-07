import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { resturantCard } from "../configs/config";
import {filterData} from "../utils/helper"
import useOnline from "../utils/useOnline";
import RestCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import userContext from "../utils/userContext";
import { useContext } from "react";
const Body = () => {
  const headerUser=useContext(userContext)
  console.log("bodyContext",headerUser);
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredHotel, setFilteredHotel] = useState([]);
  const [searchText, setsearchText] = useState(" ");

  useEffect(() => {
    getHotelData();
  }, []);


 async function getHotelData () {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.5280179&lng=76.2147772&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonAkkan = await data?.json();
    setRestaurantData(jsonAkkan?.data.cards[2]?.data?.data?.cards);
    setFilteredHotel(jsonAkkan?.data.cards[2]?.data?.data?.cards);
  };
  const isOnline=useOnline()
 
if(!isOnline){
  return <h2>offline! Please check your network connection</h2>
}


  return (
    <>
    <div className="bg-gray-900">

      <div className="py-5 mt-1 px-2 bg-gray-900 flex justify-center">
        {/* <input
        placeholder="context set" 
        value={headerUser.user.name}
        onChange={(e)=>headerUser.setUser({name:e.target.value})}/> */}

        <input
          className="input-txt w-64 rounded-xl"
          type="text"
          placeholder="search your favourites..."
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
            const data = filterData(searchText,restaurantData);
            setFilteredHotel(data);
          }}
        />
        <div className="px-1">
        <button
          className="bg-green-600 hover:bg-green-900 px-5 text-white rounded-2xl "
          onClick={() => {
        
            const data = filterData(searchText,restaurantData);
            setFilteredHotel(data);
          }}
        >
          Search
        </button>
        </div>
      </div>

      {restaurantData?.length === 0 ? (
        <div className="bodyCard">
          <Shimmer />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center ">
          {filteredHotel?.length === 0 ? (
            <h1 className="No-resturants">No Resturants Found!</h1>
          ) : (
            filteredHotel?.map((hotel) => {
              return (
                <Link to={"/restaurants/" + hotel.data.id} className="link" key={hotel.data.id}>
                  <RestCard  restaurant={hotel}  />
                </Link>
              );
            })
          )}
        </div>
      )}
      </div>
    </>
  );
};
export default Body;
