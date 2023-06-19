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
    <section className="box-border block container">
      <div className="m-5 flex justify-center items-center flex-col">
        <p className="my-5 ">{people.length} is Remaining</p>
        {people.map((persons) => {
          // distructure the Birthday data
          const { id, gender, image, full_name, email } = persons;
          // return the data below
          return (
            <div key={id} className="flex justify-between items-center">
              <div>
                {" "}
                <img src={image} className="w-20 h-20 rounded-full "></img>
              </div>
              <div>
                <h2>{full_name}</h2>
                <p>{gender}</p>
                <p>{email}</p>
              </div>
            </div>
          );
        })}
        <div onClick={handleClick}>
          {" "}
          <Button props="Clear Me" />
        </div>

        <Link to="/">
          <button className="">Go back To LandingPage</button>
        </Link>
      </div>
    </section>
  );
}

export default Birthday;
