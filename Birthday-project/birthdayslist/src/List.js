import React from "react";

function List({ persons }) {
  return (
    <div>
      {persons.map((person) => {
        const { id, name, email, gender, image } = person;
        return (
          <article key={id}>
            <img src={image} alt="name" className="img" />
            <div>
              <p>{name}</p>
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
