import { useEffect, useState } from "react";

const User = (props) => {
  const { name, location, email } = props;
  
  // useEffect(()=>
  // {
  //   setInterval(()=>
  //   {
  //     console.log("User Functional Component from UseEffect()")
  //   },1000)
  //   return(()=>
  //   {
  //      console.log("Returned from useEffect()")
  //   })
  // }, [])


  return (
    <div className="user-card">
      <h2>Name : {name} </h2>
      <h3>Email : {email}</h3>
      <h4>Location : {location}</h4>
    </div>
  );
};

export default User;
