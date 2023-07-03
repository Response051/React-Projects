import { useState } from "react";

import NoTour from "./NoTour";
import Tours from "./Tours";
import Data from "./../../assets/ToursData.json";

function MainApp() {
  const [tours, setTours] = useState(Data);

  // this function filters the tours via a button called not interested on the Loading.jsx
  const removeTours = (id) => {
    const Newtours = tours.filter((tour) => tour.id !== id);
    setTours(Newtours);
  };

  if (tours.length === 0) {
    return (
      <main>
        <NoTour tours={tours} setTours={setTours()} />
      </main>
    );
  }
  return (
    <main className="container block px-0 ">
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
  // return (
  //   <div>
  //     {loading ? (
  //       <main>
  //         <Loading />
  //       </main>
  //     ) :(

  //       <main>
  //         <Tours tours={tours} removeTours={removeTours}/>
  //       </main>
  //     )}
  //   </div>
  // );
}

export default MainApp;
