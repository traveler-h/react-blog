import { Route, Routes, useRoutes } from "react-router-dom";
import { RouteObject } from "react-router";
import Home from "@pages/home";
import { lazy } from "react";

// const routerMap: RouteObject[] = [
//   {
//     path: '/',
//     element: Home
//   }
// ]

// const routes = useRoutes(routerMap)

// export default routes

const routeMap: any[] = [
  {
    path: "/",
    components: Home,
  }, {
    path: '/video',
    components: lazy(() => import(/* webpackChunkName: 'mobxstore' */ '@pages/video')),
  }
];

const Routers = () => (
  <Routes>
    {routeMap.map((item: any, index: any) => (
      <Route
        key={index}
        path={item.path}
        element={ item.components}
      />
    ))}
  </Routes>
);

console.log(Routers)

export default Routers;
