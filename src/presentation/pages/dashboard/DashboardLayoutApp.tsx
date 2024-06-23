import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { menuDashboard } from "../../router/Router";
import { SidebarItem } from "./SideBarItem";
import './Dashboard.css';

export const DashboardLayout = () => {
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="flex flex-row mt-7 dashboard relative">
      <nav className={`lg:flex flex-col ml-5 lg:w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl ${menuOpen ? 'flex w-full' : 'hidden'}`}>
        <h1 onClick={() => nav('/')} className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text text-transparent hover:cursor-pointer">
          Sport AI<span className="text-indigo-500">.</span>
        </h1>
        <span className="text-xl text-white mt-4">Bienvenido</span>

        <div className="border-gray-700 border my-3" />
        {/* Opciones del menú */}
        {
          menuDashboard.map(opt => (
            <SidebarItem key={opt.to} opt={opt} />
          ))
        }
      </nav>

      <button className="lg:hidden fixed top-3 right-4 z-50 text-white text-3xl" onClick={toggleMenu}>
        {menuOpen
          ? <i className="fa-solid fa-circle-xmark"></i>
          : <i className="fa-solid fa-bars"></i>
        }
      </button>

      <section className={`md:mx-3 lg:mx-20 flex flex-col ${menuOpen ? 'hidden' : ''} sm:w-full h-[calc(100vh-50px)] bg-white bg-opacity-10 md:p-5 py-5 rounded-3xl`}>
        <div className="flex flex-row h-full">
          <div className={`flex flex-col flex-auto h-full p-1`}>
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};
