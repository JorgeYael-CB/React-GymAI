import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../auth"
import { UserDbInterface } from "../../interfaces";
import { GetUserUseCase } from "../../../core";
import { AlertFormApp, LoaderForm } from "../../components";
import { Config } from "./Config";
import { NavLink } from "react-router-dom";


export const ConfigDashboardApp = () => {
  const { isLogged, token } = useContext(AuthContext);
  const [userConfig, setUserConfig] = useState<UserDbInterface>();
  const [errorGetUser, setErrorGetUser] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if( !isLogged ) return;

    GetUserUseCase({token: token!})
      .then( data => {
        if( data.error ){
          setIsLoading(false);
          return setErrorGetUser(data.error);
        }

        setIsLoading(false);
        setUserConfig({...data.user!});
      })
  }, []);


  return (
    <>
    {
      isLogged && !errorGetUser
      ?
        isLoading
        ? <LoaderForm/>
        : <Config data={userConfig!}/>
      : <div className='bg-gray-800 p-2'>
          <AlertFormApp content={errorGetUser ?? 'Inicia sesión para ver tu configuracion'} error/>
          <div className='flex justify-center'>
            <NavLink to='/auth/login' className='px-4 py-1.5 text-white bg-blue-600 rounded-md font-semibold text-lg mt-2'>Iniciar sesión</NavLink>
          </div>
        </div>
    }
    </>
  )
}
