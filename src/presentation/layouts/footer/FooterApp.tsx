import { NavLink } from "react-router-dom"
import { envs } from "../../../config"

export const FooterApp = () => {
  return (
    <footer className='flex flex-wrap xl:gap-40 gap-20 justify-center bg-blue-900 py-12 px-4 items-center mt-72'>
      <div className='flex flex-row gap-2 items-center text-white'>
        <h2 className='font-black text-9xl'>{ envs.empresaName.at(0) }</h2>
        <p className='font-extrabold text-5xl uppercase'>{envs.empresaName}</p>
      </div>
      <div className='text-white flex flex-col items-center gap-2'>
        <NavLink className={'hover:underline'} to='#'>Servicios</NavLink>
        <NavLink className={'hover:underline'} to='#'>Contacto</NavLink>
        <NavLink className={'hover:underline'} to='#'>Nosotros</NavLink>
      </div>
      <div className='text-white flex flex-col items-center gap-2'>
        <NavLink className={'hover:underline'} to='#'>Terminos y Condiciones</NavLink>
        <NavLink className={'hover:underline'} to='#'>Preguntas comúnes</NavLink>
        <NavLink className={'hover:underline'} to='#'>Privacidad</NavLink>
      </div>
      <div className='text-white flex flex-col items-center gap-2'>
        <NavLink className={'hover:underline'} to='#'>Youtube</NavLink>
        <NavLink className={'hover:underline'} to='#'>+52 5581262206</NavLink>
        <NavLink className={'hover:underline'} to='#'>Discord</NavLink>
      </div>
    </footer>
  )
}
