import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <div>
      <h1 className="head12">About us</h1>
      <Link to="/about/profile">
      <button className="login_btn1">View Profile</button></Link>
      <Outlet/>
    </div>
  );
};
export default About;
