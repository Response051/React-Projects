import Hero from "./component/Hero";
import Demo from "./component/Demo";

function App() {
  return (
    <main className="w-full">
      <div className="via-yellow-900">
        <div className="gradient"></div>
      </div>
      <div className="">
        <Hero />
        <Demo />
      </div>
    </main>
  );
}

export default App;
