import { NavLink, Outlet } from "react-router-dom";
import { menuRoutes } from "../../router/Router";
import { NavLinkApp } from "./NavLinkApp";
import { FooterApp } from "../footer/FooterApp";
import { useContext } from "react";
import { AuthContext } from "../../auth";

export const NavBarApp = () => {
  const { isLogged } = useContext(AuthContext);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full py-4 border border-gray-800 text-white px-8 flex flex-row justify-around backdrop-blur-md items-center transition-all shadow-md z-50`}
      >
        <nav className="flex gap-4 items-center">
          {menuRoutes.map(route => (
            <NavLinkApp key={ route.to } route={ route }/>
          ))}
        </nav>
        <nav className="flex gap-2 items-center">
          {
            isLogged
            ? <>
              <NavLink
                className={`font-medium text-lg transition-all bg-gray-700 text-white px-2 py-1 rounded-md`}
                to="/auth/login"
              >
                Logout
              </NavLink>
              <NavLink
                className="font-medium text-lg bg-gray-200 text-black rounded-md px-4 py-1"
                to="/auth/register"
              >
                Panel
              </NavLink>
            </>
            :<>
              <NavLink
                className={`font-medium text-lg transition-all bg-gray-700 text-white px-2 py-1 rounded-md`}
                to="/auth/login"
              >
                Iniciar sesión
              </NavLink>
              <NavLink
                className="font-medium text-lg bg-gray-200 text-black rounded-md px-4 py-1"
                to="/auth/register"
              >
                Empezar
              </NavLink>
            </>
          }
        </nav>
      </div>

      {/* Muestra los elementos hijos y añade margen superior para evitar que se oculten detrás del navbar */}
      <div className='mb-40'>
        <Outlet />
      </div>

      <FooterApp/>
    </>
  );
};
