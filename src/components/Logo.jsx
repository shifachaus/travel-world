import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <h1 className="text-lg mb-6 text-neutral-50 font font-medium">
        Travel world
      </h1>
    </Link>
  );
};

export default Logo;
