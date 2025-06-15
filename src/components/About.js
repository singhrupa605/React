import React from "react";
import ClassUser from "./ClassUser";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div className="about">
        <h1>This is My About Page</h1>
        <hr style={{ marginTop: "10px" }} />
        <ClassUser
          name="Rupa Singh"
          location="Sisona"
          email="singh@gmail.com"
          childname="child1"
        />
        <ClassUser name="Preeti Sahu" location="Korba" email="preeti@gmail.com" childname="child2"/>
        <ClassUser name="Preeti Sahu" location="Korba" email="preeti@gmail.com" childname="child3"/>
      </div>
    );
  }
}

export default About;
