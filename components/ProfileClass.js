import axios from "axios";
import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        
      },
    };
    console.log("constructor props");
  }
  async componentDidMount() {
    const userData = await axios.get(
      "https://api.github.com/users/arunsankar609"
    );
    console.log("userr", userData.data);
    this.setState({ userInfo: userData.data });
    console.log("didmount",this.state.userInfo);
  }
  render() {
    console.log("render phase");
    const { count } = this.state;
    return (
      <div className="profile">
        <h2>Name:{this.state.userInfo?.name}</h2>
        <img src={this.state.userInfo?.avatar_url}/>
        <h3>location:{this.state.userInfo?.location}</h3>
       
      </div>
    );
  }
}
export default ProfileClass;
