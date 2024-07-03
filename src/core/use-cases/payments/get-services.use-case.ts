import { envs } from "../../../config";
import { GetServicesPaymentInterface } from "../../../presentation/interfaces";



export const GetServicesUseCase = async():Promise<GetServicesPaymentInterface> => {
  try {
    const url = `${envs.apiUrl}/payments/get-services`;
    const res = await fetch( url );
    const data = await res.json()

    console.log( data );

    return data
  } catch (error) {
    return {
      error: 'Oops!, try again later.'
    }
  }
}
