import { ChangeEvent } from "react";

interface Props {
  edad: string | number;
  altura: string | number;
  peso: string | number;
  sexo: string,
}

type callback = (e: ChangeEvent<HTMLInputElement>) => void;

export const DatosPersonal = ({ data, callback }: { data: Props, callback: callback }) => {
  return (
    <>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="edad" className="text-gray-700 font-medium">Edad</label>
          <input
            onChange={callback}
            value={data.edad}
            id="edad"
            className="rounded-md px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black text-sm"
            type="number"
            placeholder="Tu edad"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="altura" className="text-gray-700 font-medium">Altura (cm)</label>
          <input
            onChange={callback}
            value={data.altura}
            id="altura"
            className="rounded-md px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black text-sm"
            type="number"
            placeholder="Tu altura"
          />
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-2 w-full mt-4">
          <label htmlFor="peso" className="text-gray-700 font-medium">Peso (kg)</label>
          <input
            onChange={callback}
            value={data.peso}
            id="peso"
            className="rounded-md px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black text-sm"
            type="number"
            placeholder="Tu peso"
          />
        </div>
        <div className="flex flex-col gap-2 w-full mt-4">
          <label htmlFor="peso" className="text-gray-700 font-medium">Sexo (M - F)</label>
          <select
            onChange={ callback }
            id='sexo'
            value={ data.sexo }
            className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value='M'>M (masculino)</option>
            <option value='F'>F (femenino)</option>
          </select>
        </div>
      </div>
    </>
  );
};
