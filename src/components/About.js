import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent component did mount is called");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1 className="about-us">About Us</h1>
        <p>
          Welcome to our restaurant app! We are dedicated to providing you with
          the best dining experience possible. Our team is passionate about food
          and committed to bringing you a wide variety of culinary delights.
        </p>
        <UserClass name="Rakesh (Class)" location="Ramakkpet" />
        {/* {console.log("In between Two Childs")}  */}
        {/* <UserClass name="Manith (Class)" location="Gambiraopet" />
        <UserClass name="Rishith (Class)" location="Kamareddy" /> */}
      </div>
    );
  }
}
export default About;
