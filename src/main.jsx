import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import SignIn from "./components/signIn.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
      {path:"/About",element:<About></About>},
     
    ],
  },
  {
    path:"/login-form",element:<Login />
  },
  {
    path:"/sign-in-form",element:<SignIn />
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
