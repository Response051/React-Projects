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
    <div>
      <p>{first.length} Birthdays Remaining</p>
      <List persons={first} />
      <button onClick={handleClear}>Clear Birthdays</button>
    </div>
  );
}

export default App;
