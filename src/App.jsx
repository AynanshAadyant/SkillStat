
import React from "react"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Courses from "./pages/Courses"
import Progress from "./pages/Progress"
import { Outlet } from "react-router-dom"


const Layout = () => (
  <>
    <Navbar />
    <Outlet /> {/* This renders the matched route component */}
    <Footer />
  </>
);
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Use the Layout component here
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/progress",
          element: <Progress />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
      ],
    },
  ]);

  return (
    <>
    <RouterProvider router={router} />
      
    </>
  )
}

export default App
