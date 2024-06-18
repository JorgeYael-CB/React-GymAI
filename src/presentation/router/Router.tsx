import { createBrowserRouter } from "react-router-dom";
import { HomeApp } from "../pages";




export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeApp/>,
  }
]);