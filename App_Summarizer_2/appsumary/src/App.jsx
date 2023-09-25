import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((counts) => counts + 1);
  };
  const minus = () => {
    setCount((counts) => counts - 1);
  };
  return (
    <>
      <button onClick={add}>add</button>
      <p>{count}</p>
      <button onClick={minus}>Minus</button>
    </>
  );
}

export default App;
