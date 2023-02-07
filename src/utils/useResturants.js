import axios from "axios";
import { useEffect, useState } from "react";

const useResturant = (id) => {
  console.log("id verinda", id);
  const [restaurantD, setRestaurant] = useState(null);
  useEffect(() => {
    Data();
  }, []);

  const Data = async () => {
    const restaurant = await axios.get(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=10.598759170871096&lng=76.14204525947571&menuId=" +
        id
    );
    console.log("ethane restur", restaurant?.data);
    setRestaurant(restaurant?.data);
    console.log("return cheyunna sanam", restaurantD);
   
  };
  return restaurantD;
};
export default useResturant;
