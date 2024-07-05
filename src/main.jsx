import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogList from "./components/BlogList.jsx";
import Blogdetail from "./components/Blogdetail.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Profile from "./components/Profile.jsx";
import Error from "./components/Error.jsx";
import { UserProvider } from "./context/userContext.jsx";
import AddBlog from "./components/AddBlog.jsx";

const client = new QueryClient();
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BlogList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/blog/:blogId",
        element: <Blogdetail />,
      },
      {
        path: "/add-blog",
        element: <AddBlog />,
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
