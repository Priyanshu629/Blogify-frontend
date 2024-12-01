import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Error from "./components/Error.jsx";
import { UserProvider, useUser } from "./context/userContext.jsx";
import AddBlog from "./components/AddBlog.jsx";
import ForgetPassword from "./components/ForgetPassword.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import Home from "./components/Home.jsx";
import MyBlogs from "./components/MyBlogs.jsx";
import Profile from "./components/Profile.jsx";



const BlogList = lazy(() => import("./components/BlogList.jsx"));
const Blogdetail = lazy(() => import("./components/Blogdetail.jsx"));
const Account = lazy(() => import("./components/Account.jsx"))

const client = new QueryClient();

const AppRouter = () => {
  const { isLoggedIn } = useUser()

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
          path: "/account",
          element: isLoggedIn ?
            <Suspense fallback={<div>Loading...</div>}>
              <Account />
            </Suspense> : <Navigate to="/" replace />
          ,

          children: [
            {
              path: "/account",
              element: <MyBlogs />,
            },
            {
              path: "/account/profile",
              element: <Profile />,
            },

          ]
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
          element:
            isLoggedIn ? <AddBlog /> : <Navigate to="/" replace />

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
  return <RouterProvider router={appRouter} />
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
