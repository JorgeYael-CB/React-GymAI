import { NavLink } from "react-router-dom"


export const ServicesApp = () => {
  return (
    <section className='max-w-7xl w-full mx-auto mt-52 px-4 text-white'>
      <div>
        <h1 className='text-4xl md:text-6xl font-semibold'>Nuestros Servicios</h1>
        <p className='mt-3 text-sm md:text-base font-normal md:max-w-3xl max-w-lg'>
          Si tienes alguna duda sobre nuestros servicios puedes contactar a <NavLink className='underline text-blue-500' to='/support'>Soporte</NavLink>. 
          Si quieres comprar un servicio puedes ir a la sección de <NavLink className='underline text-blue-500' to='/payments'>Pagos</NavLink>
        </p>
      </div>

      <div className='md:mt-16 mt-20 flex flex-col gap-8 animate__animated animate__fadeIn'>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
          <div className='border border-purple-800 p-6 rounded-sm'>
            <h2 className='text-center text-purple-500 text-3xl md:text-4xl'>IA</h2>
            <p className='text-center mt-6 text-sm md:text-base'>
              Tendras acceso a nuestro bot de Inteligencia Artificial en el cual podrás chatear sobre tu seguimiento de tu entrenamiento al igual 
              que tus comidas, soporte, entrenamientos, rutinas, motivacion.
            </p>
          </div>
          <div className='border border-purple-800 p-6 rounded-sm'>
            <h2 className='text-center text-purple-500 text-3xl'>Entrenador Personal</h2>
            <p className='text-center mt-6 text-sm md:text-base'>
              Durante todo el periodo de suscripción tendras acceso a nuestros entrenadores personales 
              los cuales estaran disponibles para atenderte durante su jornada laboral.
            </p>
          </div>
          <div className='border border-purple-800 p-6 rounded-sm md:col-span-2 xl:col-span-1'>
            <h2 className='text-center text-purple-500 text-3xl md:text-4xl'>Asesoriamiento</h2>
            <p className='text-center mt-6 text-sm md:text-base'>
              Durante tu suscripcion tendras asesoriamiento personalizado especialmente para ti, tus objetivos, requerimiento calorico, 
              soporte en todo lo relacionado a tus entrenamientos, si nuestros entrenadores no estan disponibles tendras acceso a nuestro 
              chat con un bot de inteligencia artificial el cual te ayudara sobre lo que requieras, igual contaras con videos, archivos, images 
              textos, etc, sobre tus rutinas y todo lo que requieras para soporte.
            </p>
          </div>
        </div>

        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
          <div className='border border-purple-800 p-6 rounded-sm'>
            <h2 className='text-center text-purple-500 text-3xl md:text-4xl'>Gamificación</h2>
            <p className='text-center mt-6 text-sm md:text-base'>
              Puntos y Recompensas: cada cierto tiempo te daran puntos por completar entrenamientos, lograr objetivos, y mantenerse constante. 
              Estos puntos podrían ser canjeables por descuentos.
            </p>
          </div>
          <div className='border border-purple-800 p-6 rounded-sm'>
            <h2 className='text-center text-purple-500 text-3xl'>Transparencia y Seguridad</h2>
            <p className='text-center mt-6 text-sm md:text-base'>
              Los datos estaran siempre seguros al igual que el asesoramiento de los entrenamientos, 
              nuestros entrenadores siempre respetaran al cliente, solo estaran disponibles para lo que requieras sobre tu asesoramientos.
            </p>
          </div>
          <div className='border border-purple-800 p-6 rounded-sm md:col-span-2 xl:col-span-1'>
            <h2 className='text-center text-purple-500 text-3xl md:text-4xl'>Accesibilidad y Diversidad</h2>
            <p className='text-center mt-6 text-sm md:text-base'>
              Nuestros entrenadores estan capacitados para darte asesoriamiento y rutinas de cualquier deporte, 
              edad, lesiónes, cualquier nivel de habilidad en cualquier deporte.
            </p>
          </div>
        </div>

        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
          <div className='border border-purple-800 p-6 rounded-sm'>
            <h2 className='text-center text-purple-500 text-3xl md:text-4xl'>Asesoramiento Nutricional</h2>
            <p className='text-center mt-6 text-sm md:text-base'>
              durante tu periodo de suscripción, obtén planes de comidas personalizados, recetas saludables 
              y guías de nutrición adaptadas a tus objetivos y necesidades específicas.
            </p>
          </div>

          <div className='border border-purple-800 p-6 rounded-sm'>
            <h2 className='text-center text-purple-500 text-3xl md:text-4xl'>Evaluaciones de Progreso</h2>
            <p className='text-center mt-6 text-sm md:text-base'>
              Realiza evaluaciones periódicas de tu progreso con nuestros entrenadores para ajustar y optimizar tus programas de entrenamiento y nutrición.
            </p>
          </div>

          <div className='border border-purple-800 p-6 rounded-sm md:col-span-2 xl:col-span-1'>
            <h2 className='text-center text-purple-500 text-3xl md:text-4xl'>Sesiones de Grupo y Comunidad</h2>
            <p className='text-center mt-6 text-sm md:text-base'>
              Únete a nuestra comunidad para interactuar con otros usuarios, compartir experiencias y participar en sesiones de entrenamiento grupales en vivo 
              donde también se daran cupones exclusivo y contenido gratuito para tu vida como deportista.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
