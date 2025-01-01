import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import RootLayout from "./layout/Rootlayout";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Links from "./pages/Links";
import SignUp from "./pages/SignUp";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="course" element={<Course />} />
        <Route path="links" element={<Links />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
