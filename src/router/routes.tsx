import { lazy } from "react";
const Index = lazy(() => import("@/pages/homepage/Index"));
const Project = lazy(() => import("@/pages/projects/index"));
const Portfolio = lazy(() => import("@/pages/portfolio/Index"));
const PortfolioShow = lazy(() => import("@/pages/portfolio/Show"));

const routes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/projects",
    element: <Project />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/portfolio/show/:id",
    element: <PortfolioShow />,
  },
];

export { routes };
