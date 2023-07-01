import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Data from "./../../assets/ToursData.json";

function MainApp() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState(Data);
  return (
    <div>
      {loading ? (
        <main>
          <Loading />
        </main>
      ) : (
        <main>
          <Tours tours={tours} />
        </main>
      )}
    </div>
  );
}

export default MainApp;
