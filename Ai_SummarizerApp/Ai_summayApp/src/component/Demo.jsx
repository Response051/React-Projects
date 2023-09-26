import { useState } from "react";

import { linkIcon } from "../assets";

function Demo() {
  const [article, setAticle] = useState({
    url: "",
    summary: "",
  });

  const HandleSubmit = async () => {
    alert("submitted");
  };
  return (
    <section>
      <div>
        <form
          className="flex relative justify-center items-center"
          onSubmit={HandleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className=" absolute right-40 mt-4 ml-3 w-5 md:inset-x-2/3"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setAticle({ ...article, url: e.target.value })}
            required
            className=" bg-blue-200  mt-4 rounded  px-20 py-1 md:px-40 md:py-2"
          />
          <button type="submit" className="absolute inset-x-0 mt-4 right-1/2">
            click
          </button>
        </form>
      </div>
    </section>
  );
}

export default Demo;
