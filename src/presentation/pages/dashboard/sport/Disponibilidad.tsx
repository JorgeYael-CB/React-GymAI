import { ChangeEvent, useState } from "react";

interface Props {
  diasDisponibles: string;
  tempoDisponible: string;
  equipamiento: string;
}

type Callback = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;

export const Disponibilidad = ({ data, callback }: { data: Props, callback: Callback }) => {
  const [showOtherEquipamiento, setShowOtherEquipamiento] = useState(false);
  const [otherEquipamiento, setOtherEquipamiento] = useState("");

  const handleSelectChange = (
    e: ChangeEvent<HTMLSelectElement>,
    setShowOther: (show: boolean) => void,
    setOther: (value: string) => void
  ) => {
    if (e.target.value === "otro") {
      setShowOther(true);
    } else {
      setShowOther(false);
      setOther("");
      callback(e); // Update the parent with the selected value
    }
  };

  const handleOtherInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setOther: (value: string) => void
  ) => {
    setOther(e.target.value);
    callback({
      ...e,
      target: {
        ...e.target,
        value: e.target.value,
        name: e.target.name,
      },
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="diasDisponibles" className="text-gray-700 font-medium">Días Disponibles</label>
        <input
          onChange={callback}
          value={data.diasDisponibles}
          id="diasDisponibles"
          name="diasDisponibles"
          className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          type="text"
          placeholder="Describe tus días disponibles"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="tempoDisponible" className="text-gray-700 font-medium">Tiempo Disponible (min/día)</label>
        <input
          onChange={callback}
          value={data.tempoDisponible}
          id="tempoDisponible"
          name="tempoDisponible"
          className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          type="text"
          placeholder="Describe tu tiempo disponible"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="equipamiento" className="text-gray-700 font-medium">Equipamiento</label>
        <select
          id="equipamiento"
          name="equipamiento"
          onChange={(e) => handleSelectChange(e, setShowOtherEquipamiento, setOtherEquipamiento)}
          className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={showOtherEquipamiento ? "otro" : data.equipamiento}
        >
          <option value="">Selecciona un equipamiento</option>
          <option value="Ninguno">Ninguno</option>
          <option value="Pesas">Pesas</option>
          <option value="Máquinas">Máquinas</option>
          <option value="otro">Otro</option>
        </select>
        {showOtherEquipamiento && (
          <input
            onChange={(e) => handleOtherInputChange(e, setOtherEquipamiento)}
            value={otherEquipamiento}
            name="equipamiento"
            className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-2"
            type="text"
            placeholder="Describe tu equipamiento"
          />
        )}
      </div>
    </div>
  );
};
