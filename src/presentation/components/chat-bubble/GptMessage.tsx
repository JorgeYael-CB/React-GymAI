import Markdown from 'react-markdown';

interface Props {
  text: string;
}

export const GptMessage = ({ text }: Props) => {
  return (
    <div className="col-start-1 col-end-8 lg:p-3 pr-20 py-2 rounded-lg">
      <div className="flex flex-row items-start">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 flex-shrink-0 max-lg:hidden">
          S
        </div>
        <div className="relative md:ml-3 font-medium text-xs md:text-sm bg-black bg-opacity-25 pt-3 pb-2 px-4 shadow rounded-xl">
          <Markdown>
            {text}
          </Markdown>
        </div>
      </div>
    </div>
  );
};
