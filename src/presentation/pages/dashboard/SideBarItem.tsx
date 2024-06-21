import { NavLink } from "react-router-dom"
import { ComponentDashboardInterface } from "../../router/Router"



export const SidebarItem = ( {opt} : {opt: ComponentDashboardInterface}) => {
  return (
    <NavLink
      key={opt.to}
      to={ opt.to }
      className={
        ({isActive}) =>
          isActive
          ? 'flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors'
          : 'flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors'
      }
    >

      <i className={`${opt.icon} text-2xl mr-4 text-indigo-400`}></i>
      <div className="flex flex-col flex-grow">
        <span className="text-white text-lg font-semibold">{opt.title}</span>
        <span className="text-gray-400 text-sm">{opt.description}</span>
      </div>
    </NavLink>
  )
}