import { NavLink } from "react-router-dom";
import { UserDbInterface } from "../../interfaces"



export const Config = ({data}: {data: UserDbInterface}) => {


  function checkIsBuyer(){
    return data.roles.includes('USER_VIP');
  }



  return (
    <div className='border border-gray-400 h-full py-8 rounded-md'>
        <h2 className='text-center text-white font-medium text-4xl'>Config</h2>

        <div
          className='max-w-5xl mx-auto flex flex-row justify-between px-2'
        >
          <div className='rounded-md px-4 py-3 mt-20 bg-indigo-700'>
            <h2 className='text-center md:text-4xl text-2xl mb-1'>Datos personales</h2>
            <hr />
            <div className='mt-3'>
              <p className='text-base'>Nombre del usuario: <span className='font-bold'>{data.name}</span> </p>
              <p className='text-base'>Correo de la cuenta: <span className='font-bold'>{data.email}</span> </p>
            </div>
          </div>

          <div className='rounded-md px-4 py-3 mt-20 bg-indigo-700'>
            <h2 className='text-center md:text-4xl text-2xl mb-1'>Configuracion de la cuenta</h2>
            <hr />
            <div className='mt-3'>
              <p className='text-base'>Cambiar contrasena: <NavLink className='underline' to='#'>Cambiar password</NavLink></p>
              <p className='text-base'>Correo de la cuenta: <span className='font-bold'>{data.email}</span> </p>
            </div>
          </div>

        </div>
      </div>
  )
}
