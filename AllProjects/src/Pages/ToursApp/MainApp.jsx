import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Data from "./../../assets/ToursData.json";

function MainApp() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState(Data);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default MainApp;
