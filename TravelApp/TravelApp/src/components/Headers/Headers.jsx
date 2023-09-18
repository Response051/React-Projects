import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Headers() {
  return (
    <>
      <div className="flex flex-row justify-between bg-blue-700 py-2 text-white ">
        <h4 className="ml-4 text-2xl"> Travel Advisor</h4>
        <div className="flex">
          <h3 className="mr-4 flex items-center">Explore New Places</h3>
          <form className="relative mr-4">
            <input
              placeholder="search"
              type="text"
              className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
            ></input>
            <span className=" absolute left-2 inset-y-0 flex items-center">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Headers;
