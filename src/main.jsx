import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Friends from "./Friends.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/friends",
    element: <Friends></Friends>,
    loader: () =>
      fetch(
        "https://friends-mela-with-auth-server-n0jc9bwpu-tainur-s-projects.vercel.app/friends"
      ),
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
