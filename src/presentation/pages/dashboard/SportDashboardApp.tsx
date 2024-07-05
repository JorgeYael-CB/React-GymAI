import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { DatosPersonal, Salud, Objetivos, Disponibilidad } from "./sport";
import { AuthContext } from "../../auth";
import { GetRoutineUseCase } from "../../../core";
import { AlertFormApp, ModalLogin } from "../../components";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";



export const SportDashboardApp = () => {
  const { isLogged, token } = useContext(AuthContext);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [messageError, setMessageError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [succesRoutine, setSuccesRoutine] = useState(false);


  const [datosPersonales, setDatosPersonales] = useState({
    peso: '',
    edad: '',
    altura: '',
    year: '',
    sexo: 'M',
  });

  const [objetivos, setObjetivos] = useState({
    objetivo: '',
    actividad: '',
    plazo: '',
    experience: 'Intermedio',
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



  const onChangeDatosPersonales = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
    const { value, id } = e.target;
    if (value.trim().length <= 0) return setDatosPersonales({ ...datosPersonales, [id]: '' })

    if( id !== 'sexo' ){
      setDatosPersonales({ ...datosPersonales, [id]: +value });
    } else {
      setDatosPersonales({ ...datosPersonales, [id]: value });
    }
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


  const onSubmit = async( e:FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if( !isLogged || !token ) return setShowModalLogin(true);
    setIsLoading(true);

    const res = await GetRoutineUseCase({
      aim: objetivos.objetivo,
      deport: objetivos.actividad,
      equipment: disponibilidad.equipamiento,
      experience: objetivos.experience,
      height: +datosPersonales.altura,
      medicalHistory: salud.historialMedico,
      sexo: datosPersonales.sexo,
      token,
      weight: +datosPersonales.peso,
      year: +datosPersonales.year,
      availableDaysForWeek: disponibilidad.diasDisponibles,
      availableTimeForDay: disponibilidad.tempoDisponible,
      foodRestrictions: salud.restriccionesAlimentarias,
    });

    if( res.error ){
      setIsLoading(false);
      //TODO: manejar errores personalizados
      return setMessageError(res.error);
    }

    if (res.pdfUrl) {
      const link = document.createElement('a');
      link.href = res.pdfUrl;
      link.download = 'rutina.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsLoading(false);
      setSuccesRoutine(true);
      return;
    }
  }



  return (
    <>
      {
        isLoading
        &&
        <AlertDialog defaultOpen={isLoading}>
          <AlertDialogContent className='bg-black text-white'>
            <AlertDialogHeader>
              <AlertDialogTitle>Tu rutina se esta generando...</AlertDialogTitle>
              <AlertDialogDescription>
                Espere por favor, su rutina esta siendo generada con IA.
                Modelo: GPT-4o.
              </AlertDialogDescription>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
      }

      {
        succesRoutine
        &&
        <AlertDialog defaultOpen={succesRoutine}>
          <AlertDialogContent className='bg-black text-white'>
            <AlertDialogHeader>
              <AlertDialogTitle>La rutina fue generada con exito!</AlertDialogTitle>
              <AlertDialogDescription>
                La rutina fue generada de forma exitosa, puedes verla en tu correo electronico 
                y tambien se debio descargar de forma automatica, cualquier duda puedes contactar a soporte.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      }

      {
        showModalLogin
        &&
        <ModalLogin onCloseModal={ setShowModalLogin }/>
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
            <button
              disabled={ isLoading }
              className='disabled:opacity-40 px-4 py-2 text-white bg-indigo-600 rounded-md font-semibold w-1/2 mt-16 hover:bg-indigo-800 transition-all'
              >Recibir Rutina
            </button>
          </div>

          {
            messageError
            &&
            <AlertFormApp content={messageError} error/>
          }
        </form>
      </div>
    </>
  );
};
