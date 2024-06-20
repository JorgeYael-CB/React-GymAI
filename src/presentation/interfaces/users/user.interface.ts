export type roles = 'USER' | 'SUPER_USER_BASIC' | 'SUPER_USER_PREMIUM' | 'SUPER_USER_ELITE' | 'ADMIN' | 'DEVELOPER';


export interface UserDbInterface {
  name: string,
  email: string,
  id: string,
  isVerify: boolean,
  isActive: boolean,
  messages: [],
  coments: [],
  date: Date,
  roles: string[],
  totalAmountPaid: number,
}