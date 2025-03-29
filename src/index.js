import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddRecipe from "./pages/AddRecipe";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/Recipedetails";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Recipes />,
  },
  {
    path: "/addrecipe",
    element: <AddRecipe />,
  },
  {
    path: "/recipedetails/:recipeid",
    element: <RecipeDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
