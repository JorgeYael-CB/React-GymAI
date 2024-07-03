import { ServiceInterface } from "./service.interface";


export interface GetServicesPaymentInterface {
  error?: string,
  status?: number,
  services?: ServiceInterface[]
}