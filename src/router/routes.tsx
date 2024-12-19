import { lazy } from "react";
const Index = lazy(() => import("@/pages/homepage/Index"));

const routes = [
  {
    path: "/",
    element: <Index />,
  },
];

export { routes };
