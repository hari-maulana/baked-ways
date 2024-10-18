import { FormInput } from "../components/commons/FormInput";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

enum Gender {
  Male = "MALE",
  Female = "FEMALE",
  Other = "OTHER",
}

enum Role {
  Admin = "ADMIN",
  User = "USER",
}

export const AdmRegisterPage = () => {
  const navigate = useNavigate();

  const registerUser = async (userData: {
    email: string;
    password: string;
    fullName: string;
    gender: Gender;
    role: Role;
    phone: string;
  }) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/register`,
      userData
    );
    return response.data;
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    gender: Gender.Male,
    role: Role.User,
    phone: "",
  });

  const { mutate } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      navigate("/login");
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(formData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen flex bg-yellow-400 text-black dark:bg-gray-900 dark:text-white items-center justify-around">
      <img
        className="max-w-[(20vw, 200px)]"
        src="../../assets/logo.png"
        alt="logo"
      />

      <form
        onSubmit={handleSubmit}
        className="bg-white py-2 px-4 flex flex-col gap-4 rounded-md w-[300px] text-black dark:bg-gray-900 dark:text-white"
      >
        <p className="font-bold text-xl">Sign up</p>
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
          autoComplete="new-password"
        />
        <FormInput
          type="text"
          placeholder="Full Name"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          autoComplete="name"
        />
        <FormInput
          type="tel"
          placeholder="Phone Number"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          autoComplete="tel"
        />
        <div className="flex flex-col">
          <label htmlFor="gender" className="text-sm mb-1">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="p-1 border rounded text-gray-500"
          >
            {Object.values(Gender).map((gender) => (
              <option key={gender} value={gender}>
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="role" className="text-sm mb-1">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="p-1 border rounded text-gray-500"
          >
            {Object.values(Role).map((role) => (
              <option key={role} value={role}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="p-2 bg-gray-700 text-white text-md rounded cursor-pointer hover:bg-gray-900"
        >
          Sign Up
        </button>

        <div className="flex gap-1 text-sm text-gray-500">
          <input type="checkbox" required />
          <p>Agree to terms of use & privacy policy.</p>
        </div>
        <div className="flex flex-col mb-2">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="cursor-pointer text-yellow-400">
              click here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
