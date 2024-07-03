

interface Props {
  token: string;
  year: number,
  height: number,
  weight:number,
  aim: string,
  deport: string,
  medicalHistory: string,
  equipment: string,
  sexo: string,
  experience: string,
  injuries?: string,
  foodRestrictions?:string,
  availableTimeForDay?: string,
  availableDaysForWeek?: string,
}

interface GetRoutineInterface {
  error?: string;
  status: number;
}


export const GetRoutineUseCase = async( data: Props ):Promise<GetRoutineInterface> => {
  try {
    const url = '';
    const res = await fetch( url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${data.token}`
      },
      body: JSON.stringify( data ),
    });

    return await res.json();
  } catch (error) {
    return {
      error: 'Oops!, try again later',
      status: 500,
    }
  }
};
