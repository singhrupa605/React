import React from "react";

class ClassUser extends React.Component {
  constructor(props) {
    super(props);
   // console.log(props)
    this.state = { counter1: 0 };
    console.log(`${props.childname} Constructor`);
  }
  componentDidMount() {
    console.log(`${this.props.childname} ComponentDidMount`);
  }

  render() {
    console.log(`${this.props.childname} Render`);

    const { name, email, location } = this.props;
    const { counter1 } = this.state;

    return (
      <div className="user-card">
        <h2>Name : {name} </h2>
        <h3>Email : {email}</h3>
        <h4>Location : {location}</h4>
        <h1>Counter1 : {counter1}</h1>
        <button
          onClick={() => {
            this.setState({
              counter1: this.state.counter1 + 1,
            });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default ClassUser;
