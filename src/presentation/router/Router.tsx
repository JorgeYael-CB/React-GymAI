import { Navigate, createBrowserRouter } from "react-router-dom";
import { AccesAuth, AsistenteDashboardApp, ConfigDashboardApp, DashboardLayout, HomeApp, LoginApp, PaymentsApp, RegisterApp, ServicesApp, SportDashboardApp, SupportApp, TermsApp } from "../pages";
import { NavBarApp } from "../layouts";
import { ReactElement } from "react";


export interface Component {
  to: string;
  title: string;
  component: ReactElement;
}

export interface ComponentDashboardInterface extends Component {
  icon: string;
  description: string;
}

export const menuRoutes:Component[] = [
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

export const menuDashboard: ComponentDashboardInterface[] = [
  {
    component: <AsistenteDashboardApp/>,
    description: 'Tú asistente virtual',
    icon: 'fa-solid fa-user',
    title: 'Asistente',
    to: '/dashboard/assistant',
  },
  {
    component: <SportDashboardApp/>,
    description: 'Nueva rutina de entrenamiento',
    icon: 'fa-solid fa-person-walking',
    title: 'Sport',
    to: '/dashboard/sport',
  },
  {
    component: <ConfigDashboardApp/>,
    description: 'Configuración',
    icon: 'fa-solid fa-gear',
    title: 'Ajustes',
    to: '/dashboard/gear',
  }
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
    element: <AccesAuth/>,
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
  {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
      ...menuDashboard.map( route => ({
        path: route.to,
        element: route.component,
      })),
      {
        path: '',
        element: <Navigate to={menuDashboard[0].to}/>
      }
    ],
  }
]);