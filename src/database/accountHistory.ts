import { get, ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import DatabaseService from './database';
import { History } from '../common/models/history';

export const postHistory = () => {
  const database = DatabaseService.getInstance();

  try {
    const id = uuidv4();
    set(ref(database, `histories/${id}`), { id, price: 2000, title: 'test' });
  } catch (error) {
    console.error('failed set', error);
  }
};

export const getHistories = async (): Promise<History[]> => {
  const database = DatabaseService.getInstance();

  try {
    const histories: History[] = [];

    const snaps = await get(ref(database, 'histories'));

    snaps?.forEach((snap) => {
      histories.push(snap.val());
    });

    return histories;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getHistory = async (id: string): Promise<History> => {
  const database = DatabaseService.getInstance();

  try {
    const snaps = await get(ref(database, `histories/${id}`));

    return snaps.val();
  } catch (error) {
    return Promise.reject(error);
  }
};
