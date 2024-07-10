import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutWithNavFooter from "./layouts/LayoutWithNavFooter";
import LayoutWithoutNavFooter from "./layouts/LayoutWithoutNavFooter";
import CreateEvent from "./components/CreateEvent";
import FindEvent from "./components/FindEvent";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PostList from "./components/PostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWithNavFooter />,
    children: [
      { path: "createEvent", element: <CreateEvent /> },
      { path: "findEvent", element: <FindEvent /> },
      { path: "", element: <PostList /> },
    ],
  },
  {
    path: "/login",
    element: <LayoutWithoutNavFooter />,
    children: [{ path: "", element: <Login /> }],
  },
  {
    path: "/signup",
    element: <LayoutWithoutNavFooter />,
    children: [{ path: "", element: <Signup /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
