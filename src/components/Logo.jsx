import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <h1 className="text-md mb-10 text-zinc-300 font font-medium">
        WorldWise
      </h1>
    </Link>
  );
};

export default Logo;
