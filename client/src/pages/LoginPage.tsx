import { useState } from "react";
import { FormInput } from "../components/commons/FormInput";
import { Form } from "react-router-dom";

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
        <FormInput type="email" placeholder="Email" required />
        <FormInput type="password" placeholder="Password" required />
        {currState === "Sign up" && (
          <>
            <FormInput type="name" placeholder="Full Name" required />
            <FormInput type="text" placeholder="Gender" required />
            <FormInput type="phone" placeholder="Phone Number" required />
            <FormInput type="text" placeholder="As User" required />
          </>
        )}
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
