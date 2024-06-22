import { envs } from "../../../config";
import { SendMessageIterface } from "../../../presentation/interfaces";


interface Props {
  message: string;
  token: string;
}


export const SendMessageUseCase = async( { message, token }: Props ): Promise<SendMessageIterface> => {
  try {
    const url = `${envs.apiUrl}/messages/send-message`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify( {message} ),
    });

    return await res.json();
  } catch (error) {
    return {
      status: 500,
      error: 'an unexpected error occurred, please try again later.',
    }
  }
};
