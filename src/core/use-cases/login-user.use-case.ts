import { envs } from "../../config";
import { LoginUserInterface } from "../../presentation/interfaces";



export const LoginUserUseCase = async( email:string, password: string ):Promise<LoginUserInterface> => {
  try {
    const url = `${envs.apiUrl}/auth/login-user`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    })

    return await res.json();
  } catch (error) {
    console.log(error);
    return {
      error: 'an unexpected error occurred, please try again later.',
    }
  }
};