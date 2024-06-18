import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const animationDuration = 4;


export const RatingApp = () => {
  const { ref, inView } = useInView({});


  return (
    <div ref={ ref } className={ `md:mt-60 mt-32 text-white flex flex-wrap gap-32 justify-center py-8 border border-gray-800` }>
      <div className='flex flex-col gap-4 text-center'>
        <h2 className='text-6xl font-extrabold text-green-500'>
          { inView && <CountUp end={ 200 } duration={ animationDuration }/> }+
        </h2>
        <p className='uppercase text-base font-medium'>Users</p>
      </div>
      <div className='flex flex-col gap-4 text-center'>
        <h2 className='text-6xl font-extrabold text-blue-500'>
          { inView && <CountUp end={ 10 } duration={ animationDuration }/>}+
        </h2>
        <p className='uppercase text-base font-medium'>Years experiencie</p>
      </div>
      <div className='flex flex-col gap-4 text-center'>
        <h2 className='text-6xl font-extrabold text-yellow-400'>
          { inView && <CountUp end={ 4.5 } decimals={ 1 } duration={ animationDuration }/>}+
        </h2>
        <p className='uppercase text-base font-medium'>Rating</p>
      </div>
    </div>
  )
}
