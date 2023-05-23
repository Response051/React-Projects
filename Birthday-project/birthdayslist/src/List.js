import React from "react";

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
              className="img my-2 w-6/12 sm:w-4/12 px-4 shadow rounded-full max-w-full h-auto align-middle border-none"
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
