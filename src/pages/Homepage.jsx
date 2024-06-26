import { Link } from "react-router-dom";
import heroimage from "../assets/heroimage.png";

const Homepage = () => {
  return (
    <main
      style={{
        "--image-url": `url(${heroimage})`,
        backgroundImage: `linear-gradient(rgba(36,42,46,0.8), rgba(36,42,46,0.8)), url(${heroimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="  mx-auto py-4 px-8  h-screen  "
    >
      <Link to={"/"}>
        <h1 className="text-3xl font-black mb-6 text-neutral-50">
          Travel world
        </h1>
      </Link>
      <section className="relative flex flex-col items-start md:items-center  pt-24  lg:pt-48 max-w-4xl mx-auto">
        <h2 className="text-3xl mb-6 text-neutral-200 font-semibold ">
          You travel the world. WorldWise keeps track of your adventures.
        </h2>

        <p className="text-sm mb-8  text-neutral-300 max-w-xl">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>

        <Link
          to={"login"}
          className="bg-primary  border-primary hover:border-neutral-400  text-neutral-200 rounded-md py-3 px-6 border text-sm  cursor-pointer"
        >
          START TRACKING NOW
        </Link>
      </section>
    </main>
  );
};

export default Homepage;
