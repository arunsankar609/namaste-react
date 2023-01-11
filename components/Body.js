import { useState } from "react";
import { resturantCard } from "../configs/config";
import { IMG_URL } from "../configs/config";

const RestCard = (props) => {
  return (
    <div className="card">
      <img
        className="cardImg"
        src={IMG_URL + props.restaurant.data?.cloudinaryImageId}
        alt="cardImage"
      />
      <h2>{props.restaurant.data?.name}</h2>
      <h3>{props.restaurant.data?.cuisines.join(",")}</h3>
      <h4 className="rating">Rating {props.restaurant.data?.avgRating}</h4>
    </div>
  );
};
const Body = () => {
  const [searchText, setsearchText] = useState(" ");
  const [restaurantD, setRestaurantData] = useState(resturantCard);
 
  
console.log(searchText);
  

  const filterData=(restaurantD,searchText)=>{
    console.log("cscscs",restaurantD);
    const filteredResturant= restaurantD?.filter((resturant)=>
      resturant.data.name===searchText
      
    )
    console.log("what the fuck",filteredResturant);
    return filteredResturant
   
    // setRestaurantData(filteredResturant)
  }

  return (
    <>
      <div className="searchbar">
        <input
          className="input-txt"
          type="text"
          placeholder="search your favourites..."
          value={searchText}
          onChange={(e)=>{setsearchText(e.target.value)}}
        />
        <button className="search-btn" onClick={()=>{
           const Data= filterData(restaurantD,searchText)
           setRestaurantData(Data);
        }} >Search</button>
      </div>

      <div className="bodyCard">
        {restaurantD?.map((resturant) => {
          return <RestCard restaurant={resturant} key={resturant.data.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
