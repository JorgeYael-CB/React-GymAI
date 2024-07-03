import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { DatosPersonal, Salud, Objetivos, Disponibilidad } from "./sport";
import { AuthContext } from "../../auth";
import { LoginApp } from "../auth/LoginApp";

export const SportDashboardApp = () => {
  const { isLogged, token } = useContext(AuthContext);
  const [showModalLogin, setShowModalLogin] = useState(false);


  const [datosPersonales, setDatosPersonales] = useState({
    peso: '',
    edad: '',
    altura: ''
  });

  const [objetivos, setObjetivos] = useState({
    objetivo: '',
    actividad: '',
    plazo: '',
  });

  const [salud, setSalud] = useState({
    historialMedico: '',
    lesiones: '',
    restriccionesAlimentarias: ''
  });

  const [disponibilidad, setDisponibilidad] = useState({
    diasDisponibles: '',
    tempoDisponible: '',
    equipamiento: '',
  });

  const onChangeDatosPersonales = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    if (value.trim().length <= 0) return setDatosPersonales({ ...datosPersonales, [id]: '' });
    setDatosPersonales({ ...datosPersonales, [id]: +value });
  };

  const onChangeObjetivos = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, id } = e.target;
    setObjetivos({ ...objetivos, [id]: value });
  };

  const onChangeSalud = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    setSalud({ ...salud, [id]: value });
  };

  const onChangeDisponible = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, id } = e.target;
    setDisponibilidad({ ...disponibilidad, [id]: value });
  };


  const onSubmit = ( e:FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if( !isLogged ) return setShowModalLogin(true);

    console.log('Si esta logeado');
  }



  return (
    <>
      {
        showModalLogin
        &&
        <LoginApp/>
      }
      <div className="overflow-scroll h-full overflow-x-auto px-4 py-6 bg-gray-100 rounded-md">
        <h2 className="text-center text-3xl font-bold text-indigo-700">Genera tu rutina con SPORT AI</h2>
        <p
          className='text-center max-w-xl mx-auto font-medium text-sm mb-8 text-red-600 mt-2'
        >
          Algunos campos son opcionales, pero esto ayudara a nuestro bot y a nuestros entrenadores a tener mas conocimiento sobre ti.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 mb-10 max-w-3xl mx-auto w-full p-6 bg-white rounded-md shadow-md"
        >
          <section>
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Datos personales</h2>
            <DatosPersonal callback={onChangeDatosPersonales} data={datosPersonales} />
          </section>

          <section className="mt-10">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Objetivos</h2>
            <Objetivos data={objetivos} callback={onChangeObjetivos} />
          </section>

          <section className="mt-10">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Estado de salud</h2>
            <Salud callback={onChangeSalud} data={salud} />
          </section>

          <section className="mt-10">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Disponibilidad</h2>
            <Disponibilidad callback={onChangeDisponible} data={disponibilidad} />
          </section>

          <div className='flex justify-center'>
            <button className='px-4 py-2 text-white bg-indigo-600 rounded-md font-semibold w-1/2 mt-16 hover:bg-indigo-800 transition-all'>Recibir Rutina</button>
          </div>
        </form>
      </div>
    </>
  );
};
