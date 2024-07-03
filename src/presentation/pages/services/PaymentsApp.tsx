import { NavLink } from 'react-router-dom';


export const PaymentsApp = () => {

  return (
    <main className='mt-36 text-center text-white'>
      <h1 className='md:text-6xl text-4xl font-bold'>Nuestras suscripciónes</h1>
      <p className='md:text-base text-sm mt-2'>Elije el plan adecuado para ti, cualquier duda puedes contactar a <NavLink to='/support'></NavLink> </p>

      <div className='my-40 flex justify-center'>
        <div className='bg-neutral-800 max-w-3xl mx-auto p-8 rounded-lg shadow-lg'>
          <h3 className='text-2xl text-center text-white my-4'>Plan Mensual</h3>
          <h2 className='font-bold text-4xl my-4 text-center text-blue-600'>$19 / <span className='text-base font-normal text-white'>Mes</span></h2>
          <hr className='border-gray-600' />

          <div className='mt-8 text-white'>
            <p className='max-w-md mx-auto text-center'>
              Con el plan mensual tendrás acceso a nuestro chat con bot de inteligencia artificial para darte asesoramiento durante tus entrenamientos,
              acceso a nuestros entrenadores personales, generar rutinas de forma automática con un bot de inteligencia artificial que te dará rutinas diarias
              durante tu periodo de suscripción, consejos de comida para antes y después de tus entrenamientos, acceso a soporte profesional y seguro con nuestros
              entrenadores mediante Whatsapp ¡y mucho más!
            </p>

            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center'>
              <div className='flex flex-col items-center'>
                <svg className='w-12 h-12 text-blue-600 mb-2' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-1.25.3-2.43.83-3.47L9 15v1c0 1.1.9 2 2 2v1.93zM11 4.07V6c0 1.1-.9 2-2 2H7.07c-.49-3.95 2.37-7.41 6.29-7.93 1.01-.11 1.98-.11 2.99 0-.15.72-.44 1.39-.84 1.99L11 4.07zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm5 13.93V18c0-1.1.9-2 2-2h1.93c-.49 3.95-4.29 6.91-8.22 7.93-.52.13-1.03.19-1.54.19-1.6 0-3.16-.36-4.56-1-.72-.34-1.37-.76-1.97-1.25L11 18.93zM12 20c1.66 0 3-1.34 3-3h-2c-1.1 0-2-.9-2-2v-2c0-.1-.01-.2-.01-.3-.19.01-.38.03-.58.03C8.34 14 7 15.34 7 17c0 1.66 1.34 3 3 3zm7-7c0-1.66-1.34-3-3-3-.2 0-.39.02-.58.03-.01-.1-.01-.2-.01-.3v-2c0-1.1-.9-2-2-2H6.07c.15-.58.38-1.14.67-1.67L7 7.07V9c0 1.1.9 2 2 2h2c.1 0 .2.01.3.01.19-.01.38-.03.58-.03 1.66 0 3-1.34 3-3s-1.34-3-3-3-.2.01-.3.01C10.34 2 9 3.34 9 5v.07C5.95 5.63 3 8.64 3 12.5c0 3.87 3.13 7 7 7h2c.01-.03.01-.05.02-.08.01.03.02.05.02.08h1.96c1.87 0 3.51-.96 4.52-2.43.4-.62.71-1.28.91-2H15c-1.1 0-2 .9-2 2s.9 2 2 2h.07c.49.52 1.02.98 1.59 1.35C17.86 18.71 19 17.45 19 16v-2.07z'/></svg>
                <p>Asesoramiento AI</p>
              </div>
              <div className='flex flex-col items-center'>
                <svg className='w-12 h-12 text-blue-600 mb-2' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-1.25.3-2.43.83-3.47L9 15v1c0 1.1.9 2 2 2v1.93zM11 4.07V6c0 1.1-.9 2-2 2H7.07c-.49-3.95 2.37-7.41 6.29-7.93 1.01-.11 1.98-.11 2.99 0-.15.72-.44 1.39-.84 1.99L11 4.07zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm5 13.93V18c0-1.1.9-2 2-2h1.93c-.49 3.95-4.29 6.91-8.22 7.93-.52.13-1.03.19-1.54.19-1.6 0-3.16-.36-4.56-1-.72-.34-1.37-.76-1.97-1.25L11 18.93zM12 20c1.66 0 3-1.34 3-3h-2c-1.1 0-2-.9-2-2v-2c0-.1-.01-.2-.01-.3-.19.01-.38.03-.58.03C8.34 14 7 15.34 7 17c0 1.66 1.34 3 3 3zm7-7c0-1.66-1.34-3-3-3-.2 0-.39.02-.58.03-.01-.1-.01-.2-.01-.3v-2c0-1.1-.9-2-2-2H6.07c.15-.58.38-1.14.67-1.67L7 7.07V9c0 1.1.9 2 2 2h2c.1 0 .2.01.3.01.19-.01.38-.03.58-.03 1.66 0 3-1.34 3-3s-1.34-3-3-3-.2.01-.3.01C10.34 2 9 3.34 9 5v.07C5.95 5.63 3 8.64 3 12.5c0 3.87 3.13 7 7 7h2c.01-.03.01-.05.02-.08.01.03.02.05.02.08h1.96c1.87 0 3.51-.96 4.52-2.43.4-.62.71-1.28.91-2H15c-1.1 0-2 .9-2 2s.9 2 2 2h.07c.49.52 1.02.98 1.59 1.35C17.86 18.71 19 17.45 19 16v-2.07z'/></svg>
                <p>Entrenadores Personales</p>
              </div>
              <div className='flex flex-col items-center'>
                <svg className='w-12 h-12 text-blue-600 mb-2' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-1.25.3-2.43.83-3.47L9 15v1c0 1.1.9 2 2 2v1.93zM11 4.07V6c0 1.1-.9 2-2 2H7.07c-.49-3.95 2.37-7.41 6.29-7.93 1.01-.11 1.98-.11 2.99 0-.15.72-.44 1.39-.84 1.99L11 4.07zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm5 13.93V18c0-1.1.9-2 2-2h1.93c-.49 3.95-4.29 6.91-8.22 7.93-.52.13-1.03.19-1.54.19-1.6 0-3.16-.36-4.56-1-.72-.34-1.37-.76-1.97-1.25L11 18.93zM12 20c1.66 0 3-1.34 3-3h-2c-1.1 0-2-.9-2-2v-2c0-.1-.01-.2-.01-.3-.19.01-.38.03-.58.03C8.34 14 7 15.34 7 17c0 1.66 1.34 3 3 3zm7-7c0-1.66-1.34-3-3-3-.2 0-.39.02-.58.03-.01-.1-.01-.2-.01-.3v-2c0-1.1-.9-2-2-2H6.07c.15-.58.38-1.14.67-1.67L7 7.07V9c0 1.1.9 2 2 2h2c.1 0 .2.01.3.01.19-.01.38-.03.58-.03 1.66 0 3-1.34 3-3s-1.34-3-3-3-.2.01-.3.01C10.34 2 9 3.34 9 5v.07C5.95 5.63 3 8.64 3 12.5c0 3.87 3.13 7 7 7h2c.01-.03.01-.05.02-.08.01.03.02.05.02.08h1.96c1.87 0 3.51-.96 4.52-2.43.4-.62.71-1.28.91-2H15c-1.1 0-2 .9-2 2s.9 2 2 2h.07c.49.52 1.02.98 1.59 1.35C17.86 18.71 19 17.45 19 16v-2.07z'/></svg>
                <p>Rutinas Automáticas</p>
              </div>
              <div className='flex flex-col items-center'>
                <svg className='w-12 h-12 text-blue-600 mb-2' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-1.25.3-2.43.83-3.47L9 15v1c0 1.1.9 2 2 2v1.93zM11 4.07V6c0 1.1-.9 2-2 2H7.07c-.49-3.95 2.37-7.41 6.29-7.93 1.01-.11 1.98-.11 2.99 0-.15.72-.44 1.39-.84 1.99L11 4.07zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm5 13.93V18c0-1.1.9-2 2-2h1.93c-.49 3.95-4.29 6.91-8.22 7.93-.52.13-1.03.19-1.54.19-1.6 0-3.16-.36-4.56-1-.72-.34-1.37-.76-1.97-1.25L11 18.93zM12 20c1.66 0 3-1.34 3-3h-2c-1.1 0-2-.9-2-2v-2c0-.1-.01-.2-.01-.3-.19.01-.38.03-.58.03C8.34 14 7 15.34 7 17c0 1.66 1.34 3 3 3zm7-7c0-1.66-1.34-3-3-3-.2 0-.39.02-.58.03-.01-.1-.01-.2-.01-.3v-2c0-1.1-.9-2-2-2H6.07c.15-.58.38-1.14.67-1.67L7 7.07V9c0 1.1.9 2 2 2h2c.1 0 .2.01.3.01.19-.01.38-.03.58-.03 1.66 0 3-1.34 3-3s-1.34-3-3-3-.2.01-.3.01C10.34 2 9 3.34 9 5v.07C5.95 5.63 3 8.64 3 12.5c0 3.87 3.13 7 7 7h2c.01-.03.01-.05.02-.08.01.03.02.05.02.08h1.96c1.87 0 3.51-.96 4.52-2.43.4-.62.71-1.28.91-2H15c-1.1 0-2 .9-2 2s.9 2 2 2h.07c.49.52 1.02.98 1.59 1.35C17.86 18.71 19 17.45 19 16v-2.07z'/></svg>
                <p>Consejos de Comida</p>
              </div>
            </div>
          </div>

          <button className='mt-12 bg-blue-700 py-3 text-white font-bold text-xl w-full rounded-lg hover:bg-blue-800 transition duration-300'>Iniciar</button>
        </div>
      </div>
    </main>
  )
}
