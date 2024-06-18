import { UserDbInterface } from "../users/user.interface";

export interface GetAllComentsInterface {
  error?: boolean;
  message: string;
  coments?: [{
    stars: number;
    coment: string;
    date: Date;
    user: UserDbInterface;
  }]
}