import React from "react";
/* *
1. destructure the persons object and map it out
2. return the individual parts of the data on the UI
3. ADD individual classes
*
*/

function List({ persons }) {
  return (
    <div>
      {persons.map((person) => {
        const { id, Name, email, gender, image } = person;
        return (
          <article key={id} className="flex flex-row ">
            <img
              src={image}
              alt="name"
              className="my-2 w-6/12 sm:w-4/12 px-4 shadow rounded-full max-w-full h-auto align-middle border-none"
            />
            <div className="flex-space">
              <p className="text-stone-950 font-bold">{Name}</p>
              <p>{email}</p>
              <p>{gender}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
