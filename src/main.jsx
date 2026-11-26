import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import NavBar from "./NavBar";
import Home from "./home";
import Shopping from "./shopping"
import Cart from "./cart"

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {index:true, element: <Home/>},
      {path:"shopping", element: <Shopping />},
      {path: "cart", element: <Cart/>},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
