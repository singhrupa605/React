import React from "react";
import ReactDOM from "react-dom/client";
/** <div id="parent">
<div id="child">
  <h1>I am a child</h1>
</div>
</div> */

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },

        [React.createElement("h1", {}, "I AM FIRST"), React.createElement("h2", {}, "I am a child two")]

    ));




//const heading = React.createElement("h1", { id: "heading", style: { color: "red" } }, "Hello World From React"); //Creates Object or react element
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent);  //takes object and creates an html element 
