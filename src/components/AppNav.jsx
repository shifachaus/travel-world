import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <nav className="mt-6 mb-8">
      <ul className="list-none flex items-center justify-center  gap-3  text-zinc-200 ">
        <li className="flex">
          <NavLink
            to="cities"
            className={({ isActive }) =>
              isActive
                ? "text-sm uppercase font bg-gray-800 py-2 px-3 rounded-md"
                : "text-sm uppercase font py-2 px-3 "
            }
          >
            Cities
          </NavLink>
        </li>
        <li>
          <NavLink
            to="countries"
            className={({ isActive }) =>
              isActive
                ? "text-sm uppercase font bg-gray-800  py-2 px-3 rounded-md"
                : "text-sm uppercase font py-2 px-3 "
            }
          >
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
