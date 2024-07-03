import { envs } from "../../../config";


interface Props {
  token: string;
  productId: string;
  name: string;
  email: string;
}


interface CreateSubscriptionUseCaseInterface {
  error?: string;
  url?:string;
}


export const CreateSubscriptionUseCase = async( body: Props ):Promise<CreateSubscriptionUseCaseInterface> => {
  try {
    const url = `${envs.apiUrl}/payments/create-session-subscription`;
    const res = await fetch( url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${body.token}`,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();

    return data;
  } catch (error) {
    return {
      error: 'Oops!, try again later...',
    }
  }
}
