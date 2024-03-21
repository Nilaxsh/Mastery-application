import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Dashboard from "../pages/Dashboard";
import Notes from "../pages/Notes";
import Login from "../pages/Login";
import Questions from "../pages/Questions";
import Students from "../pages/Students";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Notes/>} />
        <Route path="questions" element={<Questions/>} />
        <Route path="students" element={<Students/>} />
      </Route>
      <Route path="login" element={<Login/>}/>
    </>
  )
);
const Root = () => {
  return <RouterProvider router={router} />;
};

export default Root;
