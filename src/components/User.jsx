import { SignOut } from "phosphor-react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }
  return (
    <div className="p-3">
      <button
        onClick={handleClick}
        className=" flex gap-2 items-center justify-centerbg-gray-800 text-zinc-300  py-1 px-2 rounded-md font text-md"
      >
        <SignOut size={22} /> Logout
      </button>
    </div>
  );
};

export default User;
