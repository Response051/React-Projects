function NoTour({ setTours, tours }) {
  return (
    <div>
      <p>No tours Left</p>

      <button onClick={setTours(tours)}>Refresh Tour</button>
    </div>
  );
}

export default NoTour;
