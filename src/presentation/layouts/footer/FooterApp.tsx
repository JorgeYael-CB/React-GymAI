import { envs } from "../../../config"

export const FooterApp = () => {
  return (
    <footer className='flex flex-wrap xl:gap-40 gap-20 justify-center bg-blue-800 py-12 px-4 items-center mt-72'>
      <div className='flex flex-row gap-2 items-center text-white'>
        <h2 className='font-black text-9xl'>{ envs.empresaName.at(0) }</h2>
        <p className='font-extrabold text-5xl uppercase'>{envs.empresaName}</p>
      </div>
      <div className='text-white flex flex-col items-center gap-2'>
        <a href='#'>Servicios</a>
        <a href='#'>Contacto</a>
        <a href='#'>Nosotros</a>
      </div>
      <div className='text-white flex flex-col items-center gap-2'>
        <a href='#'>Terminos y Condiciones</a>
        <a href='#'>Preguntas comúnes</a>
        <a href='#'>Privacidad</a>
      </div>
      <div className='text-white flex flex-col items-center gap-2'>
        <a href='#'>Youtube</a>
        <a href='5581262206'>+52 5581262206</a>
        <a href='#'>Discord</a>
      </div>
    </footer>
  )
}
