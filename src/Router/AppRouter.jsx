import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Coverage from "../pages/Coverage";
import AboutUs from "../pages/aboutUs/AboutUs";
import SendParcel from "../pages/SendParcel";
import BeRider from "../pages/BeRider";
import Error from "../pages/Error";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Pricing from "../pages/Pricing";
import Mission from "../pages/aboutUs/Mission";
import Story from "../pages/aboutUs/Story";
import Success from "../pages/aboutUs/Success";
import Teams from "../pages/aboutUs/Teams";
import Services from "../pages/Home/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/coverage",
        loader: () => fetch("/serviceCenter.json"),
        element: <Coverage></Coverage>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
        children : [
          {
            path : '/aboutUs',
            element : <Story></Story> ,
          },
          {
            path : '/aboutUs/mission',
            element : <Mission></Mission> ,
          },
          {
            path : '/aboutUs/success',
            element : <Success></Success> ,
          },
          {
            path : '/aboutUs/teams',
            element : <Teams></Teams> ,
          },
        ]
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/sendParcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
      },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <BeRider></BeRider>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
