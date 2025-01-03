import Landing from "./components/Landing.jsx";
import About from "./components/About";
import RootLayout from "./components/routes/RootLayout";
import { RouterProvider, createBrowserRouter, NavLink } from "react-router-dom";
import "./app.css";
import Services from "./components/Service.jsx";
import Contact from "./components/Contact.jsx";

import { motion } from "framer-motion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/about", element: <About /> },
      {
        path: "/services",
        element: <Services />,
      },
      { path: "/contact", element: <Contact /> },
    ],
    errorElement: (
      <div>
        404 Not Found
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "nav-button-highlighted" : "nav-button";
          }}
        >
          Home
        </NavLink>
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
