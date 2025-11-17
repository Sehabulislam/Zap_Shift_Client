import React from "react";
import loginImg from "../../assets/authImage.png";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  const handleLogin = (data) => {

    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        toast.success("Your Account Create Successfully.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="pb-10">
      <div className="relative block lg:hidden ml-5">
        <h2 className="text-xl md:text-2xl font-extrabold mt-5 ml-3 p-3">
          ZapShift
        </h2>
        <img src={logo} alt="logo" className="absolute w-10 -top-2 p-1" />
      </div>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 w-10/12 lg:w-11/12 mx-auto">
        <div className="md:py-10">
          <div className="relative hidden lg:block">
            <h2 className="text-xl md:text-2xl font-extrabold ml-3 p-3">
              ZapShift
            </h2>
            <img src={logo} alt="logo" className="absolute w-10 -top-2 p-1" />
          </div>
          <div className="full lg:w-110 mx-auto space-y-5 lg:py-10">
            <div className="">
              <h1 className="text-4xl md:text-5xl font-bold">
                Welcome Back
              </h1>
              <h4 className="text-xl md:text-2xl">Register with ZapShift</h4>
            </div>
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
              <div>
                <label>Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                  className="w-full input md:input-lg mt-1 "
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Your Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{}[\]|:;"'<>,./?]).{6,}$/,
                  })}
                  className="w-full input md:input-lg md:text-xl mt-1 "
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    Password must be 6 characters or longer.
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must contain at least 1 uppercase, 1 lowercase, 1
                    number, 1 special character and be minimum 6 characters
                    long.
                  </p>
                )}
              </div>
              <h1 className="underline text-lime-600 ">Forget Password?</h1>
              <button className="btn w-full text-lg bg-[#CAEB66]">Login</button>
            </form>
            <h1>
              Don’t have any account?{" "}
              <Link to={"/register"} className="text-lime-600 hover:underline">
                Register
              </Link>
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
          <img src={loginImg} alt="image" className="w-200 lg:mt-30" />
        </div>
      </div>
    </div>
  );
};

export default Login;
