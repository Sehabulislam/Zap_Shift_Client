import React from "react";
import loginImg from "../../assets/authImage.png";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="mt-5 md:mt-0">
      <div className="relative block md:hidden ml-5">
        <h2 className="text-xl md:text-2xl font-extrabold ml-3 p-3">
          ZapShift
        </h2>
        <img src={logo} alt="logo" className="absolute w-10 -top-2 p-1" />
      </div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 w-11/12 mx-auto">
        {/* form  */}
        <div className="md:py-10">
          <div className="relative hidden md:block">
            <h2 className="text-xl md:text-2xl font-extrabold ml-3 p-3">
              ZapShift
            </h2>
            <img src={logo} alt="logo" className="absolute w-10 -top-2 p-1" />
          </div>

          <div className="md:w-80 lg:w-110 mx-auto space-y-5 py-10">
            <div className="">
              <h1 className="text-4xl md:text-5xl font-bold">Welcome Back</h1>
              <h4 className="text-xl md:text-2xl">Login with ZapShift</h4>
            </div>
            <form className="space-y-4">
              <div>
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full input input-lg mt-1 "
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                // type="text"
                  name="password"
                  placeholder="Your Password"
                  className="w-full input input-lg text-xl mt-1 "
                />
              </div>
              <h1 className="underline text-lime-600 ">Forget Password?</h1>
              <button className="btn w-full text-lg bg-[#CAEB66]">Login</button>
            </form>
            <h1>
              Don’t have any account?{" "}
              <Link to={'/register'} className="text-lime-600 hover:underline">Register</Link>
            </h1>
            <div className="divider">OR</div>
            <button className="btn bg-gray-100 border-none text-lg text-black border-[#e5e5e5] w-full p-5">
              <FcGoogle size={28} />
              Login with Google
            </button>
          </div>
        </div>

        {/* img */}
        <div className="">
          <img src={loginImg} alt="image" className="w-200 md:mt-70 lg:mt-30" />
        </div>
      </div>
    </div>
  );
};

export default Login;
