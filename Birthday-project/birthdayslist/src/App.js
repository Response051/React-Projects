import "./App.css";
import List from "./List";
import { Data } from "./data";
import { useState } from "react";
/**
 * 1. grabe the data from the data.js file
 * 2. pass it to the useState() function
 * 3. grabe the raw json file throught the current state i.e "first" and make it an object via the persons props on the <List />
 * 4. then access the raw datas length uding the  "first" from the useState.
 * 5. then set the setFirst to an empty array in a named function just to clear the <List />
 * 
 */

function App() {
  const [first, setfirst] = useState(Data);
  function handleClear() {
    setfirst([]);
  }
  return (
    <div className="bg-pink-600 py-10">
      <nav className="bg-white text-stone-950  mx-96  pl-6 pt-4 pb-5 border-2">
        <p className="mb-6 text-2xl">{first.length} Birthdays Remaining</p>
        <List persons={first} />
        <button
          onClick={handleClear}
          className="bg-pink-600 hover:bg-pink-400 text-white rounded-none mt-6 px-14 py-1"
        >
          Clear Birthdays
        </button>
      </nav>
    </div>
  );
}

export default App;
