import { MessageInterface } from "./message.interface";


export interface GetMessagesInterface {
  messages?: MessageInterface[];
  status: number;
  error?: string
}