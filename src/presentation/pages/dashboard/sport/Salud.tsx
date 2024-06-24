import { ChangeEvent } from "react";

interface Props {
  historialMedico: string;
  lesiones: string;
  restriccionesAlimentarias: string;
}

type Callback = (e: ChangeEvent<HTMLInputElement>) => void;

export const Salud = ({ data, callback }: { data: Props, callback: Callback }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="historialMedico" className="text-gray-700 font-medium">Historial Médico</label>
        <input
          onChange={callback}
          value={data.historialMedico}
          id="historialMedico"
          name="historialMedico"
          className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          type="text"
          placeholder="Describe tu historial médico"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="lesiones" className="text-gray-700 font-medium">Lesiones</label>
        <input
          onChange={callback}
          value={data.lesiones}
          id="lesiones"
          name="lesiones"
          className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          type="text"
          placeholder="Describe tus lesiones"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="restriccionesAlimentarias" className="text-gray-700 font-medium">Restricciones Alimentarias</label>
        <input
          onChange={callback}
          value={data.restriccionesAlimentarias}
          id="restriccionesAlimentarias"
          name="restriccionesAlimentarias"
          className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          type="text"
          placeholder="Describe tus restricciones alimentarias"
        />
      </div>
    </div>
  );
};
