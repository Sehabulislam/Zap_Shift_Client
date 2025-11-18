import loginImg from "../../assets/authImage.png";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const { registerUser, setUser, updateUserProfile, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        //store the image and get the photo url
        const formData = new FormData();
        formData.append("image", profileImg);
        const image_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${
          import.meta.env.VITE_image_host_key
        }`;
        axios.post(image_API_URL, formData).then((res) => {
          // console.log("after image upload", res.data.data.url);
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              setUser({
                ...result.user,
                userProfile,
              });
              toast.success("Your Account Login Successfully.");
              navigate(location?.state || '/');
            })
            .catch((error) => {
              toast.error(error.message);
            });
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        toast.success("Your Account Create Successfully.");
        navigate(location?.state || '/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="pb-10">
      <Link to={"/"} className="relative block lg:hidden ml-5">
        <h2 className="text-xl md:text-2xl font-extrabold mt-5 ml-3 p-3">
          ZapShift
        </h2>
        <img src={logo} alt="logo" className="absolute w-10 -top-2 p-1" />
      </Link>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 w-10/12 lg:w-11/12 mx-auto">
        <div className="md:py-10">
          <Link to={"/"} className="relative hidden lg:block">
            <h2 className="text-xl md:text-2xl font-extrabold ml-3 p-3">
              ZapShift
            </h2>
            <img src={logo} alt="logo" className="absolute w-10 -top-2 p-1" />
          </Link>
          <div className="full lg:w-110 mx-auto space-y-5 lg:py-10">
            <div className="">
              <h1 className="text-4xl md:text-5xl font-bold">
                Create an Account
              </h1>
              <h4 className="text-xl md:text-2xl">Register with ZapShift</h4>
            </div>
            {/* form  */}
            <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
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
              <div className="">
                <label>Photo</label>
                <input
                  type="file"
                  {...register("photo", { required: true })}
                  className="file-input file-input-neutral w-full input-lg"
                />
                {errors.photo?.type === "required" && (
                  <p className="text-red-500">Photo is required</p>
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
              <Link state={location.stated} to={"/login"} className="text-lime-600 hover:underline">
                Login
              </Link>
            </h1>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-gray-100 border-none md:text-lg text-black border-[#e5e5e5] w-full p-5"
            >
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
