import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>This is the error Page</h2>
      <h3>{err?.status} : {err.statusText}</h3>
    </div>
  );
};

export default ErrorPage;
