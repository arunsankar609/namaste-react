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
          <li><Link to="/home" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
          <li><Link to="/contact" className="link">contactus</Link></li>
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
       <Link to="/login">  <button className="log-btn" onClick={() => props.updateState(true)}>
            Log In
          </button></Link> 
        </div>
      )}
    </div>
  );
};
export default Headert;
