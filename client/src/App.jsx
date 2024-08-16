import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Academics from './pages/Academics';
import Gymkhana from './pages/Gymkhana';
import HostelManagement from './pages/HostelManagement';
import PlacementCell from './pages/PlacementCell';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Layout = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )

};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/academics",
        element: <Academics />,
      },
      {
        path: "/gymkhana",
        element: <Gymkhana />,
      },
      {
        path: "/hostelmanagement",
        element: <HostelManagement />,
      },
      {
        path: "/placementcell",
        element: <PlacementCell />,
      },
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
]);


const App = () => {
  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App