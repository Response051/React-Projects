import { Link } from "react-router-dom";
import Loading from "./Loading";

function Tours({ tours, removeTours }) {
  return (
    <div className="mx-0 w-screen px-12 items-center py-4 md:w-full md:px-48  bg-blue-200    ">
      <p className="my-12 text-center text-2xl md:text-3xl font-serif font-bold">
        Tours
      </p>

      <div>
        {tours.map((tour) => {
          return (
            <Loading
              key={tour.id}
              {...tour}
              removeTours={removeTours}
            ></Loading>
          );
        })}
      </div>
      <Link to="/">
        <button className="my-5 text-3xl">Go back To LandingPage</button>
      </Link>
    </div>
  );
}

export default Tours;
