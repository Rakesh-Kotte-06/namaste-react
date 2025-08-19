import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2>count: {count}</h2>
      <h2 className="user-card__name">Name: {name}</h2>
      <h3 className="user-card__bio">Age: 28</h3>
      <h3 className="user-card__bio">Location: Hyderabad</h3>
      <h3 className="user-card__bio">Contact: rakesh6kk@gmail.com</h3>
    </div>
  );
};
export default User;
