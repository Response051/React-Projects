import { Link } from "react-router-dom";
import BirthdayData from "./BirthdayData";
import { useState } from "react";
import Button from "../../assets/Button";

function Birthday() {
  const [people, setPeople] = useState(BirthdayData);
  function handleClick() {
    setPeople([]);
  }
  return (
    <section className="box-border overflow-x-hidden bg-pink-600">
      <div className="m-5 flex justify-center  flex-col sm:mx-96">
        <p className="my-5 text-center text-3xl">
          {people.length} is Remaining
        </p>
        {people.map((persons) => {
          // distructure the Birthday data
          const { id, gender, image, full_name, email } = persons;
          // return the data below
          return (
            <div
              key={id}
              className="sm:flex  items-center  border-2 bg-white px-5 py-5 "
            >
              <div className="my-4 flex justify-center">
                {" "}
                <img src={image} className="w-20 h-20 rounded-full "></img>
              </div>
              <div className="sm:relative sm:left-10 text-xl break-words text-center sm:text-left">
                <h2>{full_name}</h2>
                <p>{gender}</p>
                <p>{email}</p>
              </div>
            </div>
          );
        })}
        <div onClick={handleClick} className="my-5 text-2xl">
          {" "}
          <Button props="Clear Me" />
        </div>

        <Link to="/">
          <button className="my-5 text-3xl">Go back To LandingPage</button>
        </Link>
      </div>
    </section>
  );
}

export default Birthday;
