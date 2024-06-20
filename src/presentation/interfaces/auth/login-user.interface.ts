import { UserDbInterface } from "../users/user.interface";

export interface LoginUserInterface {
    error?: string;
    token?: string;
    user?: UserDbInterface,
    status?: number;
}