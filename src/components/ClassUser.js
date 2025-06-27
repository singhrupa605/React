import React from "react";

const BuggyComponent = () => {
  throw new Error("This is a test error!"); // Mimicking an error
  return <div>This will not render</div>;
};
class ClassUser extends React.Component {
  constructor(props) {
    console.log("Constructor is called");
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }
   async componentDidMount() {

     this.timer =  setInterval( async()=>{
    const data = await fetch("https://api.github.com/users/singhrupa605");
    const json = await data.json();
    console.log("componentDidMount is called");
     this.setState({ userInfo: json });
    }, 1000)

  }

  componentDidUpdate(prevProps, prevStates) {
    //Older way of componentDidUpdate

    // if(this.state.count1 !==  prevStates)
    // {
    //    console.log("This will be called")
    // }

    // work as another useEffect()
      // if(this.state.count2 !==  prevStates)
    // {
    //    console.log("This will be called")
    // }
    console.log("componentDidUpdate is called");
  }
  componentWillUnmount() {

    clearInterval(this.timer)
    console.log("Unmounted");
  }

  componentDidCatch(error, info) {
    console.log("Error");
    // console.error(error, info);
  }
  render() {
    console.log("Render is called");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <BuggyComponent /> Mimic Errors */}
        <div>
          <img src={avatar_url} width={250} height={250} />
        </div>
        <h2>Name : {name} </h2>
        <h4>Location : {location}</h4>
      </div>
    );
  }
}

export default ClassUser;
