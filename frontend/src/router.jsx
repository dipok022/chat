import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/auth/register";

export const router = createBrowserRouter([
  { path: "/", element: <div>Home</div> },
  { path: "/app/register", element: <Register /> },
]);
