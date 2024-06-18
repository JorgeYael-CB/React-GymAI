import { NavLink } from 'react-router-dom';
import { RatingApp, TestimonalsCardApp } from '../../components';
import { FooterApp, HeroApp } from '../../layouts';


export const HomeApp = () => {
  return (
    <>
      <HeroApp/>
      <RatingApp/>
      <TestimonalsCardApp/>

      <div className='text-white mt-72 mb-40'>
        <h2 className='text-center text-5xl'>¿Cómo funciona?</h2>
          <p className='max-w-2xl mx-auto text-center mt-6'>
            Una vez hayas comprado la suscripción tendras acceso a rutinas personalizadas, 
            asesoriamiento durante el periodo de tu suscripcion, acceso a nuestro chat con IA, 
            si quieres saber un poco más sobre lo que ofrecemos, puedes ver los <NavLink to={'#'} className='underline text-blue-500'>Planes y servicios</NavLink>
          </p>

        <div>
        </div>
      </div>

      <FooterApp/>
    </>
  )
}
