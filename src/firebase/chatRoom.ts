import {doc, getDoc, collection, setDoc, getDocs} from 'firebase/firestore';
import {ChatRoom} from '../entities/chatRoom';
import {db} from './config';

export async function getChatRoom(id: number) {
  let returnValue: ChatRoom | undefined;
  const docRef = doc(db, 'ChatRooms', id.toString());
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const snapData = docSnap.data();
    returnValue = snapData as ChatRoom;
  }
  return returnValue;
}

export async function getChatRooms(): Promise<ChatRoom[]> {
  const returnValue: ChatRoom[] = [];
  const colRef = collection(db, 'ChatRooms');
  const colSnap = await getDocs(colRef);
  colSnap.forEach(document => {
    const data = document.data() as ChatRoom;
    returnValue.push(data);
  });
  return returnValue;
}
