import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("Error: ", error);
  return (
    <div>
      <h1>OOps! Something went wrong.</h1>
      <h2>{error.status}</h2>
      <h3>{error.statusText}</h3>
      <h4>{error.data}</h4>
    </div>
  );
};

export default Error;
