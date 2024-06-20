export type roles = 'USER' | 'SUPER_USER_BASIC' | 'SUPER_USER_PREMIUM' | 'SUPER_USER_ELITE' | 'ADMIN' | 'DEVELOPER';


export interface UserDbInterface {
  id:string | number;
  name: string;
  email: string;
  roles: roles[];
  date: Date;
  verify: boolean;
  isActive: boolean;
  totalAmountPaid: number;
  messages: any,
  coments: any,
}