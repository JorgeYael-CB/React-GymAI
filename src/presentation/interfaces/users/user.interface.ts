export type roles = 'ADMIN' | 'DEVELOPER' | 'USER' | 'USER_PREMIUM' | 'USER_VIP' | 'SUPER_USER';


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