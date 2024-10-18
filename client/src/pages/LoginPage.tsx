import { FormInput } from "../components/commons/FormInput";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { login } from "../features/authentication/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = async (userData: { email: string; password: string }) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/login`,
      userData
    );

    dispatch(
      login({
        userId: response.data.userId,
        token: response.data.token,
        role: response.data.role,
      })
    );
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { mutate } = useMutation({
    mutationFn: userLogin,
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="min-h-screen flex bg-[#f3f3f3] text-black dark:bg-gray-900 dark:text-white items-center justify-around">
      <img
        className="w-[300px] h-[300px]"
        src="https://res.cloudinary.com/circlehmhm/image/upload/v1729192975/Untitled_design_1_ftdebz.svg"
        alt="logo"
      />

      <form
        onSubmit={handleSubmit}
        className="bg-white py-2 px-4 flex flex-col gap-4 rounded-md w-[300px] text-black dark:bg-gray-900 dark:text-white"
      >
        <p className="font-bold text-xl">Login</p>
        <FormInput
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
        <FormInput
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          autoComplete="current-password"
        />
        <button
          type="submit"
          className="p-2 bg-gray-700 text-white text-md rounded cursor-pointer hover:bg-gray-900"
        >
          Sign In
        </button>
        <div className="flex flex-col mb-2">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="cursor-pointer text-yellow-400">
              create here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
