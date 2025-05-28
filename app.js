import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", className: "abcd", style: { background: "red" } },
  "Hello World From React!"
);
/* 
To get the below html
<div id="parent">
    <div id="child">
        <h1>I'm a h1 tag</h1>
    </div>
</div>
ReactELement(Object) => HTML(Browser Understands)
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "Child", key: "1" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "Child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
]);
console.log(parent);
console.log(heading); // Here this heading is an object because React.createElement will create an object not the element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // Here this render function will convert the heading object into a html element
