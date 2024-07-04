import { ChangeEvent, useState } from "react";

interface Props {
  objetivo: string;
  actividad: string;
  plazo: string;
  experience: string;
}

type Callback = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;

export const Objetivos = ({ data, callback }: { data: Props, callback: Callback }) => {
  const [showOtherObjective, setShowOtherObjective] = useState(false);
  const [otherObjective, setOtherObjective] = useState("");
  const [showOtherActivity, setShowOtherActivity] = useState(false);
  const [otherActivity, setOtherActivity] = useState("");
  const [showOtherPlazo, setShowOtherPlazo] = useState(false);
  const [otherPlazo, setOtherPlazo] = useState("");

  const handleSelectChange = (
    e: ChangeEvent<HTMLSelectElement>,
    setShowOther: (show: boolean) => void,
    setOther: (value: string) => void,
    name: string
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
        <label htmlFor="objetivo" className="text-gray-700 font-medium">Objetivo</label>
        <select
          id="objetivo"
          name="objetivo"
          onChange={(e) => handleSelectChange(e, setShowOtherObjective, setOtherObjective, "objetivo")}
          className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={showOtherObjective ? "otro" : data.objetivo}
        >
          <option value="">Selecciona un objetivo</option>
          <option value="Ganar masa muscular">Ganar masa muscular</option>
          <option value="Perder peso">Perder peso</option>
          <option value="Mantener peso">Mantener peso</option>
          <option value="Por salud">Por salud</option>
          <option value="otro">Otro</option>
        </select>
        {showOtherObjective && (
          <input
            onChange={(e) => handleOtherInputChange(e, setOtherObjective)}
            value={otherObjective}
            name="objetivo"
            className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-2"
            type="text"
            placeholder="Describe tu objetivo"
          />
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="experience" className="text-gray-700 font-medium">Selecciona tú experiencia</label>
        <select
          id="experience"
          name="experience"
          onChange={callback}
          className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={data.experience}
        >
          <option value="Principiante">Principiante</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="actividad" className="text-gray-700 font-medium">Actividad</label>
        <select
          id="actividad"
          name="actividad"
          onChange={(e) => handleSelectChange(e, setShowOtherActivity, setOtherActivity, "actividad")}
          className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={showOtherActivity ? "otro" : data.actividad}
        >
          <option value="">Selecciona una actividad</option>
          <option value="Boxeo">Boxeo</option>
          <option value="Gym">Gym</option>
          <option value="Yoga">Yoga</option>
          <option value="otro">Otro</option>
        </select>
        {showOtherActivity && (
          <input
            onChange={(e) => handleOtherInputChange(e, setOtherActivity)}
            value={otherActivity}
            name="actividad"
            className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-2"
            type="text"
            placeholder="Describe tu actividad"
          />
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="plazo" className="text-gray-700 font-medium">Plazo</label>
        <select
          id="plazo"
          name="plazo"
          onChange={(e) => handleSelectChange(e, setShowOtherPlazo, setOtherPlazo, "plazo")}
          className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={showOtherPlazo ? "otro" : data.plazo}
        >
          <option value="">Selecciona un plazo</option>
          <option value="1 mes">1 mes</option>
          <option value="3 meses">3 meses</option>
          <option value="6 meses">6 meses</option>
          <option value="otro">Otro</option>
        </select>
        {showOtherPlazo && (
          <input
            onChange={(e) => handleOtherInputChange(e, setOtherPlazo)}
            value={otherPlazo}
            name="plazo"
            className="text-black font-medium px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-2"
            type="text"
            placeholder="Describe tu plazo"
          />
        )}
      </div>
    </div>
  );
};
