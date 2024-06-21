import { envs } from "../../../config";
import { LoginUserInterface } from "../../../presentation/interfaces";


interface Props{
  token:string;
}

export const VerifyTokenUseCase = async( { token }: Props ):Promise<LoginUserInterface> => {
  try {
    const url = `${envs.apiUrl}/auth/validate-token`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return await res.json();
  } catch (error) {
    return {
      error: 'An unexpected error occurred, please try again later.',
      status: 500,
    }
  }
};
