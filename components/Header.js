import { Link } from "react-router-dom";
const Headert = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo"
          src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg"
          alt=""
        />
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Offers</li>
          <li>Cart</li>
        </ul>
      </div>
      {props.stateLog ? (
        <div className="userIcon">
          <h4 className="logged-user">Welcome Arun</h4>
          <button className="log-btn" onClick={() => props.updateState(false)}>
            Log Out
          </button>
        </div>
      ) : (
        <div className="userIcon">
          <button className="log-btn" onClick={() => props.updateState(true)}>
            Log In
          </button>
        </div>
      )}
    </div>
  );
};
export default Headert;
