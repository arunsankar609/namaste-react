import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMG_URL } from "../configs/config";
import axios from "axios";
import Shimmer from "./Shimmer";
import useResturant from "../utils/useResturants";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../store/CartSlice";
const ResturantDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  console.log(params);
  const restaurantData = useResturant(params.id);
  console.log("zxzxzxczx", restaurantData);
  const handlerAdd = (item) => {
    dispatch(addItem(item));
  };
  if (!restaurantData) {
    return <Shimmer />;
  }
  return (
    <div className="flex bg-orange-300 p-4 justify-evenly">
      <div>
        <h2 className="text-xl font-semibold">Resturant id:{params.id}</h2>
        <h2 className="text-xl font-semibold font-sans ">
          Name:{restaurantData?.data?.name}
        </h2>
        <img
          className="rounded-xl"
          src={IMG_URL + restaurantData?.data?.cloudinaryImageId}
        />

        <h2 className="text-xl font-semibold font-sans ">
          City:{restaurantData?.data?.city},{restaurantData?.data?.data?.area}
        </h2>
        <h3 className="text-lg font-semibold font-sans ">
          Average Rating:{restaurantData?.data?.avgRatingString} stars
        </h3>
      </div>
      <div className="px-3 mt-16 bg-slate-200 text-white text-center rounded-3xl">
        <div className="text-2xl text-blue-900 font-extrabold">
          <h1>Menu</h1>
        </div>

        <ul>
          {Object.values(restaurantData?.data?.menu?.items).map((item) => (
            
            <div className="flex justify-around bg-green-900 p-2 m-2 rounded-2xl" key={item?.id}>
              {console.log("card undakenda sathangal",item)}
              <div className="p-2">
              <img className="h-20 rounded-2xl " src={IMG_URL+item?.cloudinaryImageId}/>
              <h1>{item.category}</h1>
              <h1>Price-{item.price/100} Rs</h1>

              </div>
              <div className="mt-4">
              <li key={item?.id}>
                {item?.name}
                <button
                  className="bg-green-400 text-blue-900 font-semibold p-2 m-2 ml-2 rounded-2xl"
                  onClick={() => handlerAdd(item)}
                >
                  Add to Cart
                </button>
              </li>
              </div>
              
            </div>
          
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantDetails;
