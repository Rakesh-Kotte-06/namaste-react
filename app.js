import React from "react";
import ReactDOM from "react-dom/client";
// create react element using Core React
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// JSX - is a HTML like or XML like syntax not HTML in JS
// creating react element using JSX
const jsxHeading = (
  <div id="container">
    <h1 id="heading" className="head" tabIndex="5">
      Namaste React using JSX
    </h1>
    <h2 id="heading" className="head" tabIndex="5">
      By Akshay Saini
    </h2>
  </div>
);

console.log(heading, jsxHeading); //both are same

const Title = function () {
  return (
    <h2 id="author" className="author">
      By Akshay Saini
    </h2>
  );
};
const hike = "14%";
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {/* /*you can call it as a function*/}
    {Title()}

    <h1 id="heading" className="head" tabIndex="5">
      Namaste React using JSX
    </h1>
    {hike}
    {console.log(hike, "Hike")}
    {heading}
  </div>
);
console.log(<HeadingComponent />);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
