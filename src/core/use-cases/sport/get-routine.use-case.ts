import { envs } from "../../../config";

interface Props {
  token: string;
  year: number,
  height: number,
  weight: number,
  aim: string,
  deport: string,
  medicalHistory: string,
  equipment: string,
  sexo: string,
  experience: string,
  injuries?: string,
  foodRestrictions?: string,
  availableTimeForDay?: string,
  availableDaysForWeek?: string,
}

interface GetRoutineInterface {
  error?: string;
  status: number;
  pdfUrl?: string;
}

export const GetRoutineUseCase = async (data: Props): Promise<GetRoutineInterface> => {
  try {
    const url = `${envs.apiUrl}/user-data/get-training-routine`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${data.token}`
      },
      body: JSON.stringify(data),
    });

    const contentType = res.headers.get("Content-Type");

    if (contentType && contentType.includes("application/pdf")) {
      const blob = await res.blob();
      const pdfUrl = URL.createObjectURL(blob);
      return {
        status: res.status,
        pdfUrl
      };
    } else {
      const json = await res.json();
      return {
        ...json,
        status: res.status
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: 'Oops!, try again later',
      status: 500,
    }
  }
};
