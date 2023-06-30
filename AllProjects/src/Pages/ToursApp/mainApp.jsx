import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

function MainApp() {
  const [loading, setLoading] = useState();
  const [tours, setTours] = useState([]);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }return (
    <main>
      <Tours />
    </main>
  );
}

export default MainApp;
