import { Link } from "react-router-dom";
import Loading from "./Loading";

function Tours({ tours }) {
  return (
    <div>
      <p>Tours</p>

      <div>
        {tours.map((tour) => {
          return <Loading key={tour.id} {...tour}></Loading>;
        })}
      </div>
      <Link to="/">
        <button className="my-5 text-3xl">Go back To LandingPage</button>
      </Link>
    </div>
  );
}

export default Tours;
