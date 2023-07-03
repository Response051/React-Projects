import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <p>LandingPage</p>
      <Link to="/TodoPage">To-Do-Page</Link>
      <br />
      <Link to="/BirthdayPage">BirthdayPage</Link>
      <br />
      <Link to="/ToursPage">ToursPage</Link>
    </div>
  );
}

export default LandingPage;
