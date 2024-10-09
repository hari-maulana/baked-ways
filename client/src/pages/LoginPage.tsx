import { FormInput } from "../components/commons/FormInput";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const registerUser = async (userData: any) => {
  const response = await axios.post(
    "http://localhost:3003/auth/register",
    userData
  );
  return response.data; // Assuming the server returns the created user data
};

console.log(registerUser);

export const LoginPage = () => {
  const [currState, setCurrState] = useState("Login");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    gender: "",
    role: "",
    phone: "",
  });

  const { mutate, status, isError, isSuccess, error } = useMutation({
    mutationFn: registerUser,
  });

  const isLoading = (status as "loading" | "pending" | "idle") === "loading";

  // Handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();
    mutate(formData);
  };

  // Handle form input changes
  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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
        onSubmit={handleSubmit}
        action=""
        className="bg-white py-2 px-4 flex flex-col gap-4 rounded-md w-[300px] text-black dark:bg-gray-900 dark:text-white"
      >
        <p className="font-bold text-xl">{currState}</p>
        <FormInput
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {currState === "Sign up" && (
          <>
            <FormInput
              type="name"
              placeholder="Full Name"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <FormInput
              type="text"
              placeholder="Gender"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            />
            <FormInput
              type="phone"
              placeholder="Phone Number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <FormInput
              type="text"
              placeholder="As User"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
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

{
  /* <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="text-white bg-black"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>

      {isError && <p>Error: {error.message}</p>}
      {isSuccess && <p>Registration successful!</p>}
    </div> */
}

/*"email": "jack2@example.com",
  "password": "password123",
  "fullName": "Jack2",
  "gender": "MALE",
  "Role": "USER",
  "phone": "1234567890"*/
