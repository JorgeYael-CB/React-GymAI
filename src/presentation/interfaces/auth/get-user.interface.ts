import { UserDbInterface } from "../users/user.interface";


export interface GetUserInterface {
  user?: UserDbInterface;
  status: number;
  error?: string;
}