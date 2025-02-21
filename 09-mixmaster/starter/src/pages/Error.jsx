import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

export default function Error() {
  const error = useRouteError();
  console.log(error.status);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Page Not Found</h3>
          <p>The page you are looking for does not exist.</p>
          <Link to="/">Back to Home</Link>
        </div>
      </Wrapper>
    );
  } else if (error.status === 500) {
    return (
      <Wrapper>
        <div>
          <h3>Internal Server Error</h3>
          <p>An unexpected error occurred on the server.</p>
          <Link to="/">Back to Home</Link>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div>
          <h3>Something Went Wrong</h3>
          <p>An unknown error occurred.</p>
          <Link to="/">Back to Home</Link>
        </div>
      </Wrapper>
    );
  }
}
