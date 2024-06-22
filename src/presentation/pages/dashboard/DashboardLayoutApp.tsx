import {  Outlet, useNavigate } from "react-router-dom";
import { menuDashboard } from "../../router/Router";
import { SidebarItem } from "./SideBarItem";
import './Dashboard.css';


export const DashboardLayout = () => {
  const nav = useNavigate();


  return (
    <main className="flex flex-row mt-7 dashboard">
      <nav className="hidden sm:flex flex-col ml-5 w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl">
        <h1 onClick={ () => nav('/') } className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text text-transparent hover:cursor-pointer">
          Sport AI<span className="text-indigo-500">.</span>
        </h1>
        <span className="text-xl text-white mt-4">Bienvenido</span>

        <div className="border-gray-700 border my-3" />
        {/* Opciones del menú */}
        {
          menuDashboard.map( opt => (
            <SidebarItem key={opt.to} opt={opt}/>
          ))
        }
      </nav>

      <section className="mx-3 sm:mx-20 flex flex-col w-full h-[calc(100vh-50px)]  bg-white bg-opacity-10 p-5 rounded-3xl">
        <div className="flex flex-row h-full">
          <div className="flex flex-col flex-auto h-full p-1">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};