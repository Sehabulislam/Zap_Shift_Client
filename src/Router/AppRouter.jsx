import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Coverage from "../pages/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import SendParcel from "../pages/SendParcel";
import BeRider from "../pages/BeRider";
import Error from "../pages/Error";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Pricing from "../pages/Pricing";
import Mission from "../pages/AboutUs/Mission";
import Story from "../pages/AboutUs/Story";
import Success from "../pages/AboutUs/Success";
import Teams from "../pages/AboutUs/Teams";
import Services from "../pages/Home/Services";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/DashPages/MyParcels";

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
        element: <AboutUs />,
        children: [
          {
            index: true,
            element: <Story />,
          },
          {
            path: "mission",
            element: <Mission />,
          },
          {
            path: "success",
            element: <Success />,
          },
          {
            path: "teams",
            element: <Teams />,
          },
        ],
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
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myParcels",
        element: <MyParcels></MyParcels>,
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
