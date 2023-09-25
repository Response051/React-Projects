import { logo } from "../assets";

function Hero() {
  return (
    <header className=" flex w-full justify-center items-center flex-col">
      <nav className="flex justify-around items-center w-full mb-10 pt-1 ">
        <img src={logo} className="object-contain w-28" />
        <button
          type="button"
          className="bg-black rounded-md py-1 px-4 text-white"
          // set an onclick section here to link to the github profile
        >
          GitHub
        </button>
      </nav>
      <h1 className="text-black font-mono font-bold text-5xl ">
        <span className="text-6xl">Summarize</span> <br className="lg:hidden" />{" "}
        Article With{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          <br className="lg:hidden" /> OpenAI GPT-4
        </span>
      </h1>
      <p className="text=3xl text-blue-700 font-medium w-full text-center mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa,
        voluptatem ad delectus cumque libero asperiores aut fugit? Facere eos
        commodi, et impedit pariatur reiciendis! Fugiat quo soluta culpa minus?
      </p>
    </header>
  );
}

export default Hero;
