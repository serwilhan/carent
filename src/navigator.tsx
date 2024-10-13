import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

export const Navigator = () => {
  const data = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);

  return <RouterProvider router={data} />;
};
