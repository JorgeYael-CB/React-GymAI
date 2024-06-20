import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../../auth";


export const AccesAuth = () => {
  const { isLogged } = useContext(AuthContext);



  return (
    <>
      {
        isLogged
        ? <Navigate to='/'/>
        : <Outlet/>
      }
    </>
  )
}
