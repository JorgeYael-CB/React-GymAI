export type roles = 'USER' | 'SUPER_USER_BASIC' | 'SUPER_USER_PREMIUM' | 'SUPER_USER_ELITE' | 'ADMIN' | 'DEVELOPER';


export interface UserDbInterface {
  id: string,
  name: string,
  email: string,
  isVerify: boolean,
  isActive: boolean,
  roles: roles[],
  date: Date,
  totalAmountPaid: number,
  messages: any[],
  coments: any[],
  limitMessage: number
}