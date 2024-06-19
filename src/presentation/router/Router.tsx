import { createBrowserRouter } from "react-router-dom";
import { HomeApp, LoginApp, PaymentsApp, RegisterApp, ServicesApp, SupportApp, TermsApp } from "../pages";
import { NavBarApp } from "../layouts";


export const menuRoutes = [
  {
    to: "/",
    title: "Home",
    component: <HomeApp />
  },
  {
    to: "/services",
    title: "Servicios",
    component: <ServicesApp />
  },
  {
    to: "/payments",
    title: "Pagos",
    component: <PaymentsApp />
  },
  {
    to: "/terms",
    title: "Terms",
    component: <TermsApp />
  },
  {
    to: "/support",
    title: "Soporte",
    component: <SupportApp />
  },
];


export const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBarApp/>,
    children: [
      ...menuRoutes.map( route => ({
        path: route.to,
        element: route.component,
      }))
    ],
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <LoginApp/>
      },
      {
        path: 'register',
        element: <RegisterApp/>
      },
    ]
  },
]);