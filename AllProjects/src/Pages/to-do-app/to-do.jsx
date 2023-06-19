import { Link } from "react-router-dom";

function Todo() {
  return (
    <div>
      <p>to-do</p>
      <Link to="/">
        <button className="">
          LandingPage
        </button>
      </Link>
    </div>
  );
}

export default Todo;
