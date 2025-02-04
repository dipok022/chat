import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { router } from "./router.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
