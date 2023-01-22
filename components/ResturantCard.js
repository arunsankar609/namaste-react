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
        <h3 className="fitCard">{props.restaurant.data?.cuisines.join(",")}</h3>
        <h4 className="rating">Rating {props.restaurant.data?.avgRating}</h4>
      </div>
    );
  };
   export default RestCard