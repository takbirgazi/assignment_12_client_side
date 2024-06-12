import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import SignUp from "../pages/SignUp/SignUp";
import LogIn from "../pages/LogIn/LogIn";
import AllTests from "../pages/AllTests/AllTests";
import MyUpcomingAppointments from '../pages/UserDashboard/MyUpcomingAppointments/MyUpcomingAppointments';
import TestResults from "../pages/UserDashboard/TestResults/TestResults";
import MyProfile from "../pages/UserDashboard/MyProfile/MyProfile";
import UserDashboard from '../layout/UserDashboard';
import AdminDashboard from "../layout/AdminDashboard";
import StatisticsPage from "../pages/AdminDashboard/StatisticsPage/StatisticsPage";
import AddBanner from "../pages/AdminDashboard/AddBanner/AddBanner";
import AddTest from "../pages/AdminDashboard/AddTest/AddTest";
import AllBanners from "../pages/AdminDashboard/AllBanners/AllBanners";
import AllTestsAdmin from "../pages/AdminDashboard/AllTestsAdmin/AllTestsAdmin";
import AllUsers from "../pages/AdminDashboard/AllUsers/AllUsers";
import Reservation from "../pages/AdminDashboard/Reservation/Reservation";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AdminError from "../pages/AdminError/AdminError";
import PrivateRoute from "./PrivateRoute";
import TearmsAndCondation from "../pages/TearmsAndCondation/TearmsAndCondation";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import CardDetails from "../components/TestsCard/CardDetails";
import AdminRoute from "./AdminRoute";
import EditTests from "../pages/AdminDashboard/AddTest/EditTests";
import AddTestReport from "../pages/AdminDashboard/Reservation/AddTestReport";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/allTests",
        element: <AllTests></AllTests>
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/termsCondition",
        element: <TearmsAndCondation></TearmsAndCondation>
      }
      ]
  },
  {
    path: "user",
    element: <UserDashboard></UserDashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/user/",
        element: <ErrorPage></ErrorPage>
      },
      {
        path: "upcomingAppointments",
        element: <PrivateRoute><MyUpcomingAppointments></MyUpcomingAppointments></PrivateRoute>
      },
      {
        path: "testResult",
        element: <PrivateRoute><TestResults></TestResults></PrivateRoute>
      },
      {
        path: "myProfile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: "bookingTest/:id",
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>
      }
    ]
  },
  {
    path: "admin",
    element: <AdminDashboard></AdminDashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/admin/",
        element: <AdminError></AdminError>
      },
      {
        path: "statisticsPage",
        element: <AdminRoute><StatisticsPage></StatisticsPage></AdminRoute>
      },
      {
        path: "addBanner",
        element: <AdminRoute><AddBanner></AddBanner></AdminRoute>
      },
      {
        path: "addTest",
        element: <AdminRoute><AddTest></AddTest></AdminRoute>
      },
      {
        path: "allBanners",
        element: <AdminRoute><AllBanners></AllBanners></AdminRoute>
      },
      {
        path: "adminAllTests",
        element: <AdminRoute><AllTestsAdmin></AllTestsAdmin></AdminRoute>
      },
      {
        path: `adminAllTests/update/:id`,
        element: <AdminRoute><EditTests></EditTests></AdminRoute>
      },
      {
        path: `testReport/update/:id`,
        element: <AdminRoute><AddTestReport></AddTestReport></AdminRoute>
      },
      {
        path: "allUsers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "reservation",
        element: <AdminRoute><Reservation></Reservation></AdminRoute>
      }
    ]
  }

]);

export default router;