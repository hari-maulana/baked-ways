import { useState } from "react";

export const LoginPage = () => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div
      className="min-h-screen flex bg-yellow-400 text-black dark:bg-gray-900 dark:text-white items-center justify-around"
      // style={{
      //   backgroundImage: `url('../../assets/background.png')`,
      //   backgroundSize: "cover",
      // }}
    >
      <img
        className="max-w-[(20vw, 200px)]"
        src="../../assets/logo.png"
        alt="logo"
      />

      <form
        action=""
        className="bg-white py-2 px-4 flex flex-col gap-4 rounded-md w-[300px] text-black dark:bg-gray-900 dark:text-white"
      >
        <p className="font-bold text-xl">{currState}</p>
        {currState === "Sign up" && (
          <input
            type="text"
            placeholder="username"
            className="py-1 px-2 rounded-sm border border-gray-400 focus:border-gray-700 focus:outline-none"
            required
          />
        )}
        <input
          type="email"
          placeholder="email"
          className="py-1 px-2 rounded-sm border border-gray-400 focus:border-gray-700 focus:outline-none"
          required
        />

        <input
          type="password"
          placeholder="password"
          className="py-1 px-2 rounded-sm border border-gray-400 focus:border-gray-700 focus:outline-none"
          required
        />

        {currState === "Sign up" ? (
          <button
            type="submit"
            className="p-2 bg-gray-700 text-white text-md rounded cursor-pointer hover:bg-gray-900"
          >
            Sign Up
          </button>
        ) : (
          <button
            type="submit"
            className="p-2 bg-gray-700 text-white text-md rounded cursor-pointer hover:bg-gray-900"
          >
            Sign In
          </button>
        )}

        {currState === "Sign up" && (
          <div className="flex gap-1 text-sm text-gray-500">
            <input type="checkbox" />
            <p>Agree to terms of use & privacy policy.</p>
          </div>
        )}
        <div className="flex flex-col mb-2">
          {currState === "Sign up" ? (
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span
                className="cursor-pointer text-yellow-400"
                onClick={() => setCurrState("Login")}
              >
                click here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <span
                className="cursor-pointer text-yellow-400"
                onClick={() => setCurrState("Sign up")}
              >
                create here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
