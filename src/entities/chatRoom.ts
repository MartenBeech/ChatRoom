import {Message} from './message';

export interface ChatRoom {
  title: string;
  description: string;
  messages: Message[];
  lastModified: string;
}
