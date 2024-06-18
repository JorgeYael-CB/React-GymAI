import { useInView } from "react-intersection-observer";
import { TestimonialApp } from "./TestimonialApp";

const coments = [
  {
    coment: 'Llevo poco más de 1 mes y he logrado resultados increibles y la atención al cliente es excelente!',
    date: new Date(),
    stars: 5,
    user: {
      date: new Date(),
      email: 'correo@domain.com',
      id: Date.now(),
      isActive: true,
      name: 'Jorge Yael',
      roles: ['SUPER_USER_ELITE', 'USER'],
      totalAmountPaid: 50,
      verify: true
    }
  },
  {
    coment: 'Llevo poco más de 1 mes y he logrado resultados increibles y la atención al cliente es excelente!',
    date: new Date(),
    stars: 5,
    user: {
      date: new Date(),
      email: 'correo@domain.com',
      id: Date.now(),
      isActive: true,
      name: 'Jorge Yael',
      roles: ['SUPER_USER_ELITE', 'USER'],
      totalAmountPaid: 50,
      verify: true
    }
  },
  {
    coment: 'Llevo poco más de 1 mes y he logrado resultados increibles y la atención al cliente es excelente!',
    date: new Date(),
    stars: 5,
    user: {
      date: new Date(),
      email: 'correo@domain.com',
      id: Date.now(),
      isActive: true,
      name: 'Jorge Yael',
      roles: ['SUPER_USER_ELITE', 'USER'],
      totalAmountPaid: 50,
      verify: true
    }
  }
];

export const TestimonalsCardApp = () => {
  const { ref, inView } = useInView({});


  return (
    <div ref={ ref } className={ `animate__animated ${inView ? 'animate__zoomIn' : null}` }>
      <div className='text-white text-center mt-32 mb-12'>
        <h2 className=' font-bold text-5xl'>Testimonales</h2>
        <p className='text-white font-normal text-lg mt-2'>Aquí hay algunos testimoniales de nuestros clientes</p>
      </div>
      <div className='flex flex-wrap gap-8 py-4 px-2 justify-center'>
        {coments.map( (coment, index) => (
          <TestimonialApp coment={coment.coment} date={coment.date} stars={coment.stars} user={coment.user} key={ index }/>
        ))}
      </div>
    </div>
  );
};
