import { useState } from "react";

function Loading({ id, name, image, description, price }) {
  const [readMore, SetReadmore] = useState(false);
  const [close, SetClose] = useState(false)
  const Handleclick = () => {
    if (close === id) {
      return null;
    }
  };

  return (
    <div key={id}>
      <div>
        <img src={image} alt={name} />
        {/* this conditional rendering below helps to either minimize or maximise the total wording on the descrpition */}
        <article>
          {readMore ? description : `${description.substring(0, 300)}...`}
          <button
            onClick={() => SetReadmore(!readMore)}
            className="mx-2 text-sm text-blue-500 bold cursor-pointer"
          >
            {readMore ? "Show Less" : "Show More"}
          </button>
        </article>
        <div>
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <button onClick={Handleclick}>clear</button>
      </div>
    </div>
  );
}

export default Loading;
