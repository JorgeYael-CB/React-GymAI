import { envs } from "../../../config";
import { RegisterUserInterface } from "../../../presentation/interfaces";


export const RegisterUserUseCase = async( name: string, email: string, password: string ):Promise<RegisterUserInterface> => {
  try {
    const url = `${envs.apiUrl}/auth/register-user`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password}),
    });

    return await res.json();
  } catch (error) {
    return {
      error: 'an unexpected error occurred, please try again later.',
      status: 500,
    }
  }
};
