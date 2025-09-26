import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <div className="not-found">
        <h1>404 Not Found</h1>
        <p>Where am I, where are you, we are nowhere! lets go home...</p>
        <Link to={"/"}>Go Home</Link>
      </div>
    </>
  );
}
