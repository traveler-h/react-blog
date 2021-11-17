import { Route, Routes, useRoutes } from "react-router-dom";
import { RouteObject } from "react-router";
import Home from "@pages/home";
import { lazy, Suspense } from "react";

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
        components: lazy(() => import(/* webpackChunkName: 'video' */ '@pages/video')),
    }, {
        path: '/life',
        components: lazy(() => import(/* webpackChunkName: 'life' */ '@pages/life')),
    }, {
        path: '/detail/:id',
        components: lazy(() => import(/* webpackChunkName: 'detail' */ '@pages/detail')),
    }
];

const Routers = () => (
    <Suspense fallback={<div>Loading</div>}>
        <Routes>
            {routeMap.map((item: any, index: any) => {
                console.log(item)
                return (<Route
                    key={index}
                    path={item.path}
                    element={<item.components />}
                />
                )
            })}
        </Routes>
    </Suspense>
);

console.log(Routers)

export default Routers;
