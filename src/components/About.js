import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1 className="about-us">About Us</h1>
        <h2>
          logged in User:
          <UserContext.Consumer>
            {({ loggedInUser }) => <span>{loggedInUser}</span>}
          </UserContext.Consumer>
        </h2>
        <p>
          Welcome to our restaurant app! We are dedicated to providing you with
          the best dining experience possible. Our team is passionate about food
          and committed to bringing you a wide variety of culinary delights.
        </p>
        <UserClass name="Rakesh (Class)" location="Ramakkpet" />
        {/* <UserClass name="Manith (Class)" location="Gambiraopet" />
        <UserClass name="Rishith (Class)" location="Kamareddy" /> */}
      </div>
    );
  }
}
export default About;
