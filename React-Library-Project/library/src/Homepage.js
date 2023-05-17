import React, { useState } from "react";

function Homepage() {
  const [Book, setBook] = useState("");
  const [Author, setAuthor] = useState("");
  const [value, setValue] = useState([]);
  const handlevalues = () => {
    setValue([...value, Book, Author]);
    setBook("");
    setAuthor("");
  };
  return (
    <div>
      <div>
        <h3>Book</h3>
        <input
          value={Book}
          type="text"
          onChange={(e) => setBook(e.target.value)}
        />
      </div>
      <div>
        <h3>Author</h3>
        <input
          value={Author}
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button onClick={handlevalues}>Submit</button>
      <ul>
        {value.map((values, index) => (
          <li key={index}>{values}</li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;
