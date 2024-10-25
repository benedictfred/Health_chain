import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
const AuthPage = () => {
  // State to track whether to show login or sign-up
  const [isLogin, setIsLogin] = useState(true);

  // Function to toggle between login and sign-up
  const toggleAuthMode = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div>
    <div className="flex justify-center items-center w-2/5 mt-14 my-auto md:mx-auto ">
    <div className="auth-container text-gray-600 mx-4  md:mx-6 w-full bg-white shadow-2xl py-12 px-11 rounded-lg">
      {/* Conditional rendering: Show Login if `isLogin` is true, else show Sign-Up */}
      {isLogin ? (
        <div className="login-form ">
          <h2 className=" font-bold text-2xl pb-1">Login</h2>
          <p className="">Please log in to book appointment</p>
          <form className="pt-4">
            <div className="flex flex-col pb-3">
              <label className="pb-1">Email:</label>
              <input type="email" className="rounded  " placeholder="Enter your email" />
            </div>
            <div className="flex flex-col pb-6">
              <label className="pb-1">Password:</label>
              <input type="password" className="rounded" placeholder="Enter your password" />
            </div>
            <div className="flex justify-center rounded items-center active">
            <button className="py-3 px-6 text-lg "  type="submit">Login</button>
            </div>
          </form>
          <p className="pt-3">
            Don't have an account?{" "}
            <button className="text-blue-500 underline" onClick={toggleAuthMode}>Sign Up</button>
          </p>
        </div>
      ) : (
        <div className="signup-form">
          <h2 className="font-bold text-2xl pb-1"> Create Account</h2>
         <p className="">Please sign up to book appointment</p>
          <form className="pt-4">
            <div className="flex flex-col pb-3">
              <label className="pb-1">Firstname:</label>
              <input type="text" className="rounded" placeholder="Enter your firstname" />
            </div>
            <div className="flex flex-col pb-3">
              <label className="pb-1">Lastname:</label>
              <input type="text" className="rounded" placeholder="Enter your lastname" />
            </div>
            <div className="flex flex-col pb-3">
              <label className="pb-1">Email:</label>
              <input type="email" className="rounded" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col pb-6">
              <label className="pb-1">Password:</label>
              <input type="password" className="rounded" placeholder="Enter your password" />
            </div>
            <div className="flex justify-center rounded items-center active">
            <button className="py-3 px-6 text-lg "  type="submit">Sign up</button>
            </div>
          </form>
          <p className="pt-3">
            Already have an account?{" "}
            <button  className="text-blue-500 underline" onClick={toggleAuthMode}>Login</button>
          </p>
        </div>
      )}
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default AuthPage;
