import { envs } from "../../../config";
import { GetUserInterface } from "../../../presentation/interfaces";



interface Props {
  token: string;
}


export const GetUserUseCase = async( { token }: Props ):Promise<GetUserInterface> => {
  try {
    const url = `${envs.apiUrl}/auth/get-user`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return await res.json();
  } catch (error) {
    return {
      status: 500,
      error: 'an unexpected error occurred, please try again later.',
    }
  }
}
