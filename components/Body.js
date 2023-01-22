import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { resturantCard } from "../configs/config";
import RestCard from "./ResturantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredHotel, setFilteredHotel] = useState([]);
  const [searchText, setsearchText] = useState(" ");

  console.log(searchText);
  useEffect(() => {
    getHotelData();
  }, []);

  const getHotelData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.5280179&lng=76.2147772&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonAkkan = await data.json();
    // console.log("axios vaxhi", jsonAkkan.data.cards[2].data.data.cards);
    setRestaurantData(jsonAkkan?.data.cards[2]?.data?.data?.cards);
    setFilteredHotel(jsonAkkan?.data.cards[2]?.data?.data?.cards);
  };
  const filterData = () => {
    const filteredResturant = restaurantData.filter((resturant) =>
      resturant.data.name
        .toLowerCase()
        .trim()
        .includes(searchText.toLowerCase().trim())
    );

    console.log("what the fuck", filteredResturant);
    return filteredResturant;
  };

  console.log("resturantdataaa", filteredHotel);

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
            setFilteredHotel(data);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData();
            setFilteredHotel(data);
          }}
        >
          Search
        </button>
      </div>

      {restaurantData.length === 0 ? (
        <div className="bodyCard">
          <Shimmer />
        </div>
      ) : (
        <div className="bodyCard">
          {filteredHotel.length === 0 ? (
            <h1 className="No-resturants">No Resturants Found!</h1>
          ) : (
            filteredHotel?.map((hotel) => {
              return (
                <Link to={"/restaurants/"+hotel.data.id}>
                  <RestCard restaurant={hotel} key={hotel.data.id} />
                </Link>
              );
            })
          )}
        </div>
      )}
    </>
  );
};
export default Body;
