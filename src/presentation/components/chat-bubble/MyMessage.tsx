

interface Props {
  text:string;
  image: string;
}


export const MyMessage = ( {text, image}: Props ) => {
  return (
    <div className="col-start-6 col-end-13 lg:p-3 pl-20 py-2 rounded-lg">
      <div className="flex items-start justify-start flex-row-reverse">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0 max-lg:hidden">
          {image}
        </div>

        <div className="relative mr-3 md:text-sm text-xs font-medium bg-indigo-700 py-2 px-4 shadow rounded-xl">
          { text }
        </div>
      </div>
    </div>
  )
}
