import { useSelector } from "react-redux";
import { IMG_URL } from "../configs/config";
import { useDispatch } from "react-redux";
import { clearItem, deleteItem } from "../store/CartSlice";
import { useEffect } from "react";
const Cart = () => {
  const Cartitems = useSelector((Store) => Store.cart.items);
  console.log("runnbaby", Cartitems);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearItem());
  };
  const removeItem = (id) => {
    dispatch(deleteItem(id));
  
    
  };


  return (
    <div className="m-2 p-2 ">
      <div>
        <h1 className="text-2xl font-bold">
          Number of cart Items:-{Cartitems?.length}
        </h1>
      </div>
      <div>
        <button
          onClick={() => handleClick()}
          className="w-24 rounded-lg bg-green-800 text-white"
        >
          Clear Cart
        </button>
      </div>
      <div>
        {Cartitems?.map((item) => (
          <div>
            <div className="p-2 m-2 flex border border-red-900 ">
              <div>
                <img
                  className="rounded-md w-52"
                  src={IMG_URL + item.cloudinaryImageId}
                />
              </div>
              <div className="w-[780px] bg-slate-600 rounded-md text-white m-2">
                <div className=" ">
                  {" "}
                  <h1 className="font-semibold m-2">{item.name}</h1>
                  <span className="font-bold m-2">Description</span>
                </div>
                <div>
                  <span className="m-2">{item.description}</span>
                </div>
                <div> {/* <span> {item.price}</span> */}</div>
              </div>
              <div className="my-8 flex flex-col ml-36">
                <div>
                  <span className="text-xl font-semibold underline">
                    Total Price
                  </span>
                </div>
                <div>
                  <span className="font-medium">Rs {item.price / 100}</span>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    removeItem(item.id);
                    console.log(Cartitems);
                  }}
                  className="w-[105px] ml-9 mt-10 bg-red-900 text-white rounded-lg"
                >
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 m-2 flex flex-col  bg-slate-600 text-white  items-end ">
        <div>
          <span className="font-bold text-3xl underline mr-44   text-white ">
            CheckOut
          </span>
        </div>
        <div>
          <span className="font-semibold text-2xl p-2 m-2">
            Total Checkout amount
          </span>
          <span className="font-semibold text-2xl">
            -{" "}
            {Cartitems?.reduce(function (sum, item) {
              // return the sum with previous value
              return sum + item.price / 100;

              // set initial value as 0
            }, 0)}{" "}
            Rs
          </span>
        </div>
      </div>
    </div>
  );
};
export default Cart;
