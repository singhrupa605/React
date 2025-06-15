import { useState } from "react";

const User = (props) => {
  const { name, location, email } = props;

  const [counter1] = useState(0);
  return (
    <div className="user-card">
      <h2>Name : {name} </h2>
      <h3>Email : {email}</h3>
      <h4>Location : {location}</h4>
      <h1>
        Counter1 : {counter1}
      </h1>
    </div>
  );
};

export default User;
