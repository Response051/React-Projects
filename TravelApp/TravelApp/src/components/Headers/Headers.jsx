import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Headers() {
  return (
    <>
      <div>
        <h4> Travel Advisor</h4>
        <div>
          <h3>Explore New Places</h3>
          <form>
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input placeholder="search" type="search"></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Headers;
