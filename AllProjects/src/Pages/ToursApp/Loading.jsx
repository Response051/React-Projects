import { useState } from "react";

function Loading({ id, name, image, description, price, removeTours }) {
  const [readMore, SetReadmore] = useState(false);

  return (
    <div key={id}>
      <div className="mb-6 md:mx-48">
        <img
          src={image}
          alt={name}
          className="w-full bg-cover bg-center h-1/2"
        />
        {/* this conditional rendering below helps to either minimize or maximise the total wording on the descrpition */}
        <article className="my-4 font-serif text-md">
          {readMore ? description : `${description.substring(0, 300)}...`}
          <button
            onClick={() => SetReadmore(!readMore)}
            className="mx-2 text-md text-blue-700 bg-yellow-50 px-2 bold cursor-pointer"
          >
            {readMore ? "Show Less" : "Show More"}
          </button>
        </article>
        <div className="flex justify-between my-6">
          <p className="text-md font-mono">{name}</p>
          <p className="border-1 bg-slate-200 px-2 py-1">{price}</p>
        </div>
        <div className="my-6 mb-14 flex justify-center items-center">
          <button
            onClick={() => removeTours(id)}
            className="bg-blue-500 text-xs md:text-lg cursor-pointer text-gray-50 px-10 py-1"
          >
            Not Interested
          </button>
        </div>{" "}
      </div>
    </div>
  );
}

export default Loading;
