import {doc, getDoc, collection, setDoc, getDocs} from 'firebase/firestore';
import {ChatRoom} from '../entities/chatRoom';
import {db} from './config';

export async function getChatRooms(): Promise<ChatRoom[]> {
  const returnValue: ChatRoom[] = [];
  const colRef = collection(db, 'ChatRooms');
  const colSnap = await getDocs(colRef);
  colSnap.forEach(doc => {
    const data = doc.data() as ChatRoom;
    returnValue.push(data);
  });
  return returnValue;
}
