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
        `font-medium transition-all text-lg ${
          !isActive ? 'opacity-60' : 'opacity-100'
        }`
      }
      to={route.to}
    >
      {route.title}
    </NavLink>
  )
}
