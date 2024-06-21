import { UserDbInterface } from "../users/user.interface";

export interface RegisterUserInterface {
  error?: string;
  message?:string;
  token?:string;
  user?: UserDbInterface,
  status: number;
}