import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Headert = (props) => {
  const Cart = useSelector((store) => store.cart.items);
  
  return (
    <div className="md:flex md:justify-between  md:bg-slate-600 bg-orange-400 shadow-lg">
      <div className="">
        <img
        data-testId="logo"
          className="h-20 p-3  "
          src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg"
          alt=""
        />
      </div>

      <div className="nav-items ">
        <ul className="md:flex pl-3 py-5 text-white">
          <li className=" hover:text-blue-700">
            <Link to="/home" className="pr-2 ">
              Home
            </Link>
          </li>
          <li className=" hover:text-blue-700">
            <Link to="/about" className="pr-2">
              About
            </Link>
          </li>
          <li className=" hover:text-blue-700">
            <Link to="/contact" className="pr-2">
              contactus
            </Link>
          </li>
          <li className=" hover:text-blue-700">
            <Link to="/instamart" className="pr-2">
              Instamart
            </Link>
          </li>
          <li className="pr-2">Offers</li>

          <li className="pr-2">
            <div className="flex">
              <Link to="/cart">
                Cart<span className=" rounded-full bg-green-900 content-center  ml-1 "> {Cart?.length}</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      {props.stateLog ? (
        <div className="userIcon">
          <h4 className="mr-3 mt-3 text-lg font-medium text-white">
            Welcome Arun
          </h4>

          <button
            className="w-16 h-8 bg-green-600 text-white text-center rounded-md  mr-2 items-center"
            onClick={() => props.updateState(false)}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="pl-2 ">
         
          <Link to="/login">
            {" "}
            <button
              className="p-2  bg-green-600 text-white text-center rounded-md mt-4 mr-2 items-center "
              onClick={() => props.updateState(true)}
            >
              Log In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Headert;
