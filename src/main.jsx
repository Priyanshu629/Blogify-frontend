import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Error from "./components/Error.jsx";
import { UserProvider } from "./context/userContext.jsx";
import AddBlog from "./components/AddBlog.jsx";
import ForgetPassword from "./components/ForgetPassword.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import Home from "./components/Home.jsx";
import MyBlogs from "./components/MyBlogs.jsx";

const BlogList = lazy(() => import("./components/BlogList.jsx"));
const Blogdetail = lazy(() => import("./components/Blogdetail.jsx"));
const Profile=lazy(()=>import("./components/Profile.jsx"))

const client = new QueryClient();
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Suspense><BlogList /></Suspense>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Suspense><Profile /></Suspense>,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/blog/:blogId",
        element: <Suspense><Blogdetail /></Suspense>,
      },
      {
        path: "/add-blog",
        element: <AddBlog />,
      },
      {
        path: "/my-blogs",
        element: <MyBlogs />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <UserProvider>
        <RouterProvider router={appRouter}>
          <App />
        </RouterProvider>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
