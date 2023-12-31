import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { users } from "../../../models/userDb";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuth();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
    setIsPasswordVisible((prevVisibility) => !prevVisibility);
  };

  const handleLogin = () => {
    // Perform authentication logic
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Generate a unique token (replace with a proper token generation logic)
      const token = generateUniqueToken(user.id);

      // Call the login function from the AuthContext
      login(token, user);
    } else {
      toast.error("Invalid credentials");
    }
  };

  const generateUniqueToken = (userId) => {
    return `${userId}-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 10)}`;
  };

  return (
    <div className="small-container h-auto items-center p-10 gap-10">
      <div className=" mb-2 text-[#0F2E38] text-2xl text-center font-semibold">
        Welcome Back!
      </div>
      <div className="text-[#748181] text-2xl font-normal text-center">
        Access your account
      </div>
      <div className="text-[#748181] text-base font-normal text-center mt-2">
        Enter your log in ID and password to begin{" "}
      </div>
      <form className="mt-10 ">
        <div className="">
          <label
            htmlFor="username"
            className="block text-xs font-medium mb-2 text-[#131515]"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className=" appearance-none border rounded-lg text-xs w-full p-4 leading-tight focus:outline-none"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="block text-xs font-medium mb-2 text-[#131515] mt-3.5"
          >
            Password
          </label>
          <input
            type={inputType}
            id="password"
            className="appearance-none border rounded-lg text-xs w-full p-4 leading-tight focus:outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <i
            className="fa-solid fa-eye absolute right-4 top-10"
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <div className="mt-6 text-sm font-medium ">
          <span className="text-[#748181]">Forgot password?</span>
          <span>
            <a
              href="/"
              className="no-underline hover:underline text-[#FF7A21] ml-2"
            >
              Reset it here
            </a>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-[#36A1C5] hover:bg-[#143566] text-white font-medium text-base py-2 px-4 mt-10 rounded-full w-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
