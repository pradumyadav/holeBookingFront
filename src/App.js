import "./App.css";
import Nav from "./NavBar.js/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dynamic from "./Dynamic/Dynamic";

import Gallery from "./Components/Gallery";
import Home from "./Components/Home";
import Login from "./Components/Login";

const router = createBrowserRouter([
  {
    path: "/dynamic/:section",
    element: <Dynamic />,
  },
  {
    path: "/add-ons",
    element: <Home />,
  },
  {
    path: "/refund-policy",
    element: <Home />,
  },

  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/home",
    element: <Nav />,
  },
  {
    path: "/",
    element: <Login />,
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
