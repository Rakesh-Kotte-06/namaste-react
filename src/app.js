import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "../styles.scss";

// create react element using Core React
const AppLayout = () => {
  return (
    <div className="app-container">
      {/* Header */}
      {/* Body */}
      {/* Footer */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
