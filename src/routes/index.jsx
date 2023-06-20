import { lazy } from "react";

const Home = lazy(() => import("pages/home"));
const Single = lazy(()=> import("pages/single"))
const Test = lazy(()=>import("pages/"))
const authRoutes = [];

const privateRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/single",
    element: <Single />,
  },
  {
    path: "/test",
    element: <Test />,
  },
];

export { authRoutes, privateRoutes };
