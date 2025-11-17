import { useState } from "react";
import loginImg from "../../assets/authImage.png";
import uploadIcon from "../../assets/image-upload-icon.png";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Register = () => {
  const [photo, setPhoto] = useState("");
  const { registerUser, setUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data, e) => {
    const photo = e.target.photo.value;
    registerUser(data.email, data.password)
      .then((result) => {
        updateUserProfile({
          displayName: data.name,
          photoURL: photo,
        })
          .then(() => {
            setUser({
              ...result.user,
              displayName: data.name,
              photoURL: photo,
            });
            toast.success("Your Account Login Successfully.");
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
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
                Create an Account
              </h1>
              <h4 className="text-xl md:text-2xl">Register with ZapShift</h4>
            </div>
            {/* form  */}
            <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
              <div className="dropdown dropdown-right dropdown-center">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={photo || uploadIcon} />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 ml-1 w-70 md:w-100 p-2 shadow"
                >
                  <input
                    type="url"
                    name="photo"
                    className="input input-lg w-65 md:w-full"
                    placeholder="Your Photo URL"
                    onChange={(e) => setPhoto(e.target.value)}
                  />
                </ul>
              </div>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="w-full input md:input-lg mt-1 "
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500">Name is required</p>
                )}
              </div>
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
              <button
                type="submit"
                className="btn w-full md:text-lg bg-[#CAEB66] md:mt-5"
              >
                Register
              </button>
            </form>
            <h1>
              Already have an account?{" "}
              <Link to={"/login"} className="text-lime-600 hover:underline">
                Login
              </Link>
            </h1>
            <div className="divider">OR</div>
            <button className="btn bg-gray-100 border-none md:text-lg text-black border-[#e5e5e5] w-full p-5">
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

export default Register;
