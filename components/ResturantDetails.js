import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMG_URL } from "../configs/config";
import axios from "axios";
import Shimmer from "./Shimmer";
import useResturant from "../utils/useResturants";

const ResturantDetails = () => {
  const params = useParams();

  console.log(params);
  const restaurantData = useResturant(params.id);
  console.log("zxzxzxczx", restaurantData);
  if (!restaurantData) {
    return <Shimmer />;
  }
  return (
    <div className="Rdetails">
      <div>
        <h2>Resturant id:{params.id}</h2>
        <h2>Name:{restaurantData?.data?.name}</h2>
        <img src={IMG_URL + restaurantData?.data?.cloudinaryImageId} />
        <h2>
          City:{restaurantData?.data?.city},{restaurantData?.data?.data?.area}
        </h2>
        <h3>Average Rating:{restaurantData?.data?.avgRatingString} stars</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurantData?.data?.menu?.items).map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantDetails;
