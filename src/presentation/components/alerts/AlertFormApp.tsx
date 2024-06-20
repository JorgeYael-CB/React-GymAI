
export const AlertFormApp = ({ content, error = false }: {content: string, error: boolean}) => {
  return (
    <div className={`text-white py-1.5 px-2 font-medium text-center ${error ? 'bg-red-600': 'bg-green-600'} rounded-md w-full my-1`}>
      {content}
    </div>
  )
}
