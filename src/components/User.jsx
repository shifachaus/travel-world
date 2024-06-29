import React from "react";
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
    <div className="p-3  bg-[#2c3747]  absolute top-10 right-10 z-[1000] rounded-md flex justify-between items-center gap-4 text-zinc-300">
      <div className="flex items-center gap-2 font text-sm">
        <img
          src={user.avatar}
          alt={user.name}
          className="rounded-full w-10 h-10"
        />
        <span>Welcome, {user.name}</span>
      </div>
      <button
        onClick={handleClick}
        className="bg-[#091B29]  py-1 px-2 rounded-md font text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default User;
