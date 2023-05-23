import "./App.css";
import List from "./List";
import { Data } from "./data";
import { useState } from "react";

function App() {
  const [first, setfirst] = useState(Data);
  function handleClear() {
    setfirst([]);
  }
  return (
    <div className="bg-pink-600">
      <p>Heloo world</p>
      <nav className="bg-white text-stone-950 my-10 mx-96 pl-6 pt-4 pb-5 border-2">
        <p className="mb-6 text-2xl">{first.length} Birthdays Remaining</p>
        <List persons={first} />
        <button
          onClick={handleClear}
          className="bg-pink-600 text-white rounded-none mt-6 px-14 py-1"
        >
          Clear Birthdays
        </button>
      </nav>
      <p>Heloo world</p>
    </div>
  );
}

export default App;
