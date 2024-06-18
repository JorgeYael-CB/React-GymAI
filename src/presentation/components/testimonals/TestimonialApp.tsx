

interface Props {
  coment: string,
  date: Date,
  stars: number,
  user: any,
}

export const TestimonialApp = ( { coment, date, stars, user }: Props ) => {

  return (
    <div key={ date.getTime() } className='rounded-lg shadow-lg p-6 bg-white max-w-sm w-full'>
      <p className='text-gray-500 text-xs mb-2'>{date.toUTCString()}</p>
      <p className='font-bold text-lg text-purple-800 mb-1'>{user.name}</p>
      <div className='flex items-center mb-3'>
        {[...Array(stars)].map((_, i) => (
          <svg
            key={i}
            className='w-4 h-4 text-yellow-500'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.691h4.181c.969 0 1.371 1.24.588 1.81l-3.394 2.465a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.395 2.465c-.784.57-1.839-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.593 9.394c-.783-.57-.38-1.81.588-1.81h4.181a1 1 0 00.95-.691l1.286-3.966z' />
          </svg>
        ))}
      </div>
      <p className='text-gray-700 text-base mb-4'>{coment}</p>
    </div>
  )
}
