import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch("YOUR_API_ENDPOINT/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      // Authentication successful, redirect the user or perform necessary actions
      console.log("Authentication successful");
    } catch (error) {
      console.error("Authentication failed:", error.message);
      setError("Invalid email or password"); // Set error message for display
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello !! <span className="text-primaryColor">Welcome</span> Back🎉
        </h3>

        <form onSubmit={handleSubmit} className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="mt-7">
            <button type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
              Login
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account? <Link to='/register' className="text-primaryColor font-medium ml-1">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
