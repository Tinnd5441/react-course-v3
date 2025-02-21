import { useRouteError } from "react-router-dom";

export default function SinglePageError() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>Error {error.status}</h2>
      <p>{error.statusText}</p>
      <p>{error.message}</p>
    </div>
  );
}
