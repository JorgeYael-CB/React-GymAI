import { NavLink } from "react-router-dom"
import { UserDbInterface } from "../../interfaces"


export const Config = ({data}: {data: UserDbInterface}) => {
  return (
    <div className='border border-gray-400 h-full py-8 rounded-md'>
        <h2 className='text-center text-white font-medium text-4xl'>Config</h2>

        <div className='flex flex-row justify-around mt-20 mb-12 bg-gray-800 py-2'>
            <div className='flex flex-row gap-4 items-center p-4 rounded-lg shadow-md'>
              <h3 className='text-lg font-semibold text-gray-300'>Nombre:</h3>
              <h2 className='rounded-md text-white border border-gray-500 px-6 py-1 font-medium text-sm bg-gray-700'>
                {data?.name ?? 'Not defined'}
              </h2>
            </div>
            <div className='flex flex-row gap-4 items-center p-4 rounded-lg shadow-md'>
              <h3 className='text-lg font-semibold text-gray-300'>Email: </h3>
              <h2
                className='rounded-md text-white border border-gray-500 px-6 py-1 font-medium text-sm bg-gray-700'
              > {data?.email ?? 'Not defined'} </h2>
            </div>
            <div className='flex flex-row gap-4 items-center p-4 rounded-lg shadow-md'>
              <h3 className='text-lg font-semibold text-gray-300'>Plan: </h3>
              {
                data!.roles.includes('USER_VIP')
                ?<h2
                    className='rounded-md text-white border border-white px-6 py-1 font-medium text-sm bg-yellow-600'
                  >
                  VIP
                </h2>
                : <NavLink className='bg-blue-600 text-white rounded-md px-2 py-1 hover:bg-blue-700 transition-all font-semibold' to='/payments'>Comprar Plan</NavLink>
              }
            </div>
        </div>
      </div>
  )
}
