import { IMG_URL } from "../configs/config";
import { useContext } from "react";
import userContext from "../utils/userContext";


const RestCard = (props) => {
  const user=useContext(userContext)
console.log("context vazhi",user);
    return (
      <div className="w-64  ease-in duration-300 scale-100  hover:scale-110 break-words overflow-hidden  bg-slate-100 shadow-lg m-2 p-2 ">
        <div>
        <img
          className="cardImg"
          src={IMG_URL + props.restaurant.data?.cloudinaryImageId}
          alt="cardImage"
        />
        <h2 className="font-semibold text-xl">{props.restaurant.data?.name}</h2>
        <h3 className="text-clip">{props.restaurant.data?.cuisines.join(",")}</h3>
        <h4 className="bg-green-800 text-white rounded-xl w-28 text-center">Rating {props.restaurant.data?.avgRating}</h4>
        <h1>{user.user.email}</h1>
      </div>
      </div>
    );
  };
   export default RestCard