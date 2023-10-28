import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/Signup/SignUp";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Schedule from "../pages/Schedule/Schedule";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AdminHome from "../pages/Dashboard/Admin/Home/Home";
import Members from "../pages/Dashboard/Admin/Members/Members";
import Trainers from "../pages/Dashboard/Admin/Trainers/Trainers";
import MealPlan from "../pages/Dashboard/Admin/MealPlan/MealPlan";
import AdminPrivateRoute from "../components/PrivateRoute/AdminRoute";
import UserHome from "../pages/Dashboard/User/Home/Home";
import Routine from "../pages/Dashboard/User/Routine/Routine";
import DashboardHomePage from "../pages/Dashboard/Home";
import UserMeal from "../pages/Dashboard/User/Meal/Meal";
import UserPrivateRoute from "../components/PrivateRoute/UserPrivateRoute";
import TrainerPrivateRoute from "../components/PrivateRoute/TrainerPrivateRoute";
import Mystudents from "../pages/Dashboard/Trainer/MyStudents/Mystudents";
import TrainerHome from "../pages/Dashboard/Trainer/Home/Home";
import Availability from "../pages/Dashboard/Trainer/Availability/Availability";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <Home></Home>
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <About></About>{" "}
          </>
        ),
      },
      {
        path: "/services",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <Services></Services>{" "}
          </>
        ),
      },
      {
        path: "/schedule",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <Schedule></Schedule>{" "}
          </>
        ),
      },
      {
        path: "/gallery",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <Gallery></Gallery>{" "}
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <Contact></Contact>{" "}
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <Login></Login>{" "}
          </>
        ),
      },
      {
        path: "/signup",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <SignUp></SignUp>{" "}
          </>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHomePage></DashboardHomePage>,
      },
      {
        path: "/dashboard/admin",
        element: (
          <AdminPrivateRoute>
            {" "}
            <AdminHome></AdminHome>,{" "}
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/members",
        element: (
          <AdminPrivateRoute>
            <Members></Members>{" "}
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/trainers",
        element: (
          <AdminPrivateRoute>
            <Trainers></Trainers>,{" "}
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/meal-plan",
        element: (
          <AdminPrivateRoute>
            {" "}
            <MealPlan></MealPlan>{" "}
          </AdminPrivateRoute>
        ),
      },
      // Users Routing
      {
        path: "/dashboard/user",
        element: (
          <UserPrivateRoute>
            {" "}
            <UserHome></UserHome>
          </UserPrivateRoute>
        ),
      },
      {
        path: "/dashboard/user/routine",
        element: (
          <UserPrivateRoute>
            <Routine></Routine>{" "}
          </UserPrivateRoute>
        ),
      },
      {
        path: "/dashboard/user/meal",
        element: (
          <UserPrivateRoute>
            <UserMeal></UserMeal>{" "}
          </UserPrivateRoute>
        ),
      },
      // Trainer
      {
        path: "/dashboard/trainer",
        element: (
          <TrainerPrivateRoute>
            <TrainerHome></TrainerHome>
          </TrainerPrivateRoute>
        ),
      },
      {
        path: "/dashboard/trainer/availability",
        element: (
          <TrainerPrivateRoute>
            <Availability></Availability>{" "}
          </TrainerPrivateRoute>
        ),
      },
      {
        path: "/dashboard/trainer/students",
        element: (
          <TrainerPrivateRoute>
            <Mystudents></Mystudents>
          </TrainerPrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default router;
