import "./NotFound.css";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <div className="not-found">
        <h1>404 Not Found</h1>
        <br />
        <p>
          Where am I, where are you, we are nowhere! lets{" "}
          <Link to={"/"}>Go Home</Link>...
        </p>
      </div>
    </>
  );
}
