import { envs } from "../../../config";
import { GetMessagesInterface } from "../../../presentation/interfaces";


interface Props {
  limit?: number;
  page?: number;
  recent?: boolean;
  token: string
}

export const GetMessagesUseCase = async( {limit = 20, page = 0, recent = true, token}: Props ):Promise<GetMessagesInterface> => {
  try {
    const url = `${envs.apiUrl}/messages/get-messages?page=${page}&limit=${limit}${recent ? '&recent=ye' : ''}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return await res.json();
  } catch (error) {
    return {
      status: 500,
      error: 'an unexpected error occurred, please try again later.',
    }
  }
};
