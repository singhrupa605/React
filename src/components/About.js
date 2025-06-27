import React from "react";
import ClassUser from "./ClassUser";
import User from "./User";
import { UserContext } from "../utils/UserContext";


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
  }}
  

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/singhrupa605");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
     const { name, location, avatar_url } = this.state.userInfo;


    return (
      <div className="about">
        <h1>This is My About Page</h1>
        <hr style={{ marginTop: "10px" }} />
        {/* <ClassUser
          name="Rupa Singh"
          location="Sisona"
          email="singh@gmail.com"
          childname="child1"
        /> */}
        <User name={name} location={location} />
        <UserContext.Consumer>
          {({loggedInUser})=>
          {
            return <h1>{loggedInUser}</h1>
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
