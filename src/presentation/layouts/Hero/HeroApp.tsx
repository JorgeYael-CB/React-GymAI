import 'animate.css';
import { envs } from '../../../config';



export const HeroApp = () => {
  return (
    <div className="animate__animated animate__fadeInLeft text-white grid lg:grid-cols-2 grid-cols-1 gap-12 lg:px-56 py-20 mt-12 items-center">
      <div className='flex flex-col gap-12'>
        <div>
          <h1 className="font-bold text-7xl lg:text-left text-center">{ envs.empresaName }<span className='text-xl'>GPT-4o</span></h1>
          <p className="text-base font-normal mt-10 lg:text-left text-center max-lg:px-8">
            <span className="text-xl font-bold">¿Qué esperas para lograr tu mejor versión? </span>
            Descubre la manera de optimizar tu rendimiento en cualquier deporte con nuestra innovadora plataforma. 
            Evalúa la calidad de tus rutinas y recibe asesoramiento personalizado de nuestros entrenadores profesionales para superar tus límites.
            <a href='#' className='underline text-blue-400'> Únete ahora con nosotros</a> y empieza a lograr tú mejor version.
          </p>
        </div>

        <div className='flex flex-row gap-8 items-center max-lg:justify-center max-lg:my-12'>
          <a className='hover:opacity-80 transition-all px-5 py-2 text-white rounded-sm bg-indigo-600' href='#'>Unete ahora</a>
          <a className='hover:opacity-80 transition-all px-5 py-2 text-white bg-black border border-white rounded-sm' href='#'>Learn more</a>
        </div>
      </div>

      <img className='lg:w-11/12' src='/images/gym-image.jpg' alt='Image Gym Hero' />
    </div>
  )
}
