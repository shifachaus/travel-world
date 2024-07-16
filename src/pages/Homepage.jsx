import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Homepage = () => {
  return (
    <main className="mx-auto py-4 px-8  h-screen custom-bg ">
      <Logo />
      <section className="relative flex flex-col items-start md:items-center  pt-24  lg:pt-48 mx-auto">
        <h2 className="text-4xl lg:text-5xl mb-7 text-neutral-200 font-semibold md:text-center">
          You travel the world. <br /> WorldWise keeps track of your adventures.
        </h2>

        <p className="text-sm mb-9  text-neutral-300 max-w-xl font font-medium">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>

        <Link
          to={"login"}
          className="bg-primary  border-primary text-neutral-200 rounded-md py-3 px-6 border text-xs  cursor-pointer font font-semibold"
        >
          START TRACKING NOW
        </Link>
      </section>
    </main>
  );
};

export default Homepage;
