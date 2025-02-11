import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";

export const router = createBrowserRouter([
  { path: "/", element: <div>Home</div> },
  { path: "/app/register", element: <Register /> },
  { path: "/app/login", element: <Login /> },
]);
