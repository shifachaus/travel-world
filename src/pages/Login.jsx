import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className="mx-auto py-4 px-8 h-screen bg-[#111] ">
      <Logo />
      <form
        className="max-w-sm mx-auto pt-24 lg:pt-40 "
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-md font-medium text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="block w-full p-2.5 rounded-lg bg-[#292a2a] border-gray-600 placeholder-gray-400 text-white "
            placeholder="jack@example.com"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-md  font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="block w-full p-2.5 rounded-lg bg-[#292a2a] border-gray-600 placeholder-gray-400 text-white "
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button className="font text-white bg-primary-600 hover:primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
            Login
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
