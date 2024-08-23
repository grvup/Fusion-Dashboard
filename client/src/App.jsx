import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  Route,
  BrowserRouter
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Academics from './pages/Academics';
import Gymkhana from './pages/Gymkhana';
import HostelManagement from './pages/HostelManagement';
import PlacementCell from './pages/PlacementCell';
import ComplaintSystem from './pages/ComplaintSystem';
import DepartmentPortal from './pages/DepartmentPortal';
import HealthcareCenter from './pages/HealthcareCenter';
import MessManagement from './pages/MessManagement';
import OtherAcademicProcedure from './pages/OtherAcademicProcedure';
import ProgrammeAndCurriculum from './pages/ProgrammeAndCurriculum';
import ScholarshipPortal from './pages/ScholarshipPortal';
import VisitorsHostel from './pages/VisitorsHostel';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { DarkModeProvider } from './context/DarkModeContext';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer />  */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/academics", element: <Academics /> },
      { path: "/gymkhana", element: <Gymkhana /> },
      { path: "/hostelmanagement", element: <HostelManagement /> },
      { path: "/placementcell", element: <PlacementCell /> },
      { path: "/programmeandcurriculum", element: <ProgrammeAndCurriculum /> },
      { path: "/messmanagement", element: <MessManagement /> },
      { path: "/scholarshipportal", element: <ScholarshipPortal /> },
      { path: "/healthcarecenter", element: <HealthcareCenter /> },
      { path: "/otheracademicprocedure", element: <OtherAcademicProcedure /> },
      { path: "/visitorshostel", element: <VisitorsHostel /> },
      { path: "/complaintsystem", element: <ComplaintSystem /> },
      { path: "/departmentportal", element: <DepartmentPortal /> },
    ]
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "/sign-in",
    element: <SignIn />
  },
  {
    path: "*",
    element: <div>Page not found</div>
  }
]);

const App = () => {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
};

export default App;
