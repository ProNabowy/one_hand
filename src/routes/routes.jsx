import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// Pages
// This an example of how to import page by lazy load
const Login = lazy(_ => import('../pages/Auth/Login'));
const Home = lazy(_ => import('../pages/Home'));

export default function useHandleRoutes() {
  let routes = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/", element: <Home /> },
  ]);

  return { routes };
}
