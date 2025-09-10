import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Dummy Location",
        avatar_url: "public/Assets/Restaurant_logo.jpg",
      },
    };
  }

  async componentDidMount() {
    // Api call can be made here
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      console.log("Interval is running");
    }, 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count } = this.state;
    return (
      <div className="user-card">
        {/* <div className="display_flex__center gap-1 m-1">
          <button
            className="user-card__btn"
            onClick={() => {
              this.setState({ count: count - 1 });
            }}
          >
            Decrease Count
          </button>
          <h2>count: {count}</h2>
          <button
            className="user-card__btn"
            onClick={() => {
              this.setState({ count: count + 1 });
            }}
          >
            Increase Count
          </button>
          <button
            className="user-card__btn"
            onClick={() => {
              this.setState({ count: 0 });
            }}
          >
            Reset
          </button>
        </div> */}
        <img src={avatar_url} alt="dummy avatar url" />
        <h2 className="user-card__name">Name: {name}</h2>
        <h3 className="user-card__bio">Age: 28</h3>
        <h3 className="user-card__bio">Location: {location}</h3>
        <h3 className="user-card__bio">Contact: rakesh6kk@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
