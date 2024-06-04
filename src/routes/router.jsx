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
        element: <MyUpcomingAppointments></MyUpcomingAppointments>
      },
      {
        path: "testResult",
        element: <TestResults></TestResults>
      },
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>
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
        element: <StatisticsPage></StatisticsPage>
      },
      {
        path: "addBanner",
        element: <AddBanner></AddBanner>
      },
      {
        path: "addTest",
        element: <AddTest></AddTest>
      },
      {
        path: "allBanners",
        element: <AllBanners></AllBanners>
      },
      {
        path: "adminAllTests",
        element: <AllTestsAdmin></AllTestsAdmin>
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>
      }
    ]
  }

]);

export default router;