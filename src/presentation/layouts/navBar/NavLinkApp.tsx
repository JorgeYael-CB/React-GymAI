import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

interface route {
  to: string;
  title: string;
  component: ReactElement;
}


export const NavLinkApp = ( { route }: {route: route} ) => {
  return (
    <NavLink
      key={route.to}
      className={({ isActive }) =>
        `font-medium transition-all ${
          !isActive ? 'opacity-60 text-lg' : 'opacity-100 text-xl'
        }`
      }
      to={route.to}
    >
      {route.title}
    </NavLink>
  )
}
