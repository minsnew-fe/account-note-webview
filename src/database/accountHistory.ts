import { get, ref, set } from 'firebase/database';
import DatabaseService from './database';
import { History } from '../common/models/history';
import { generateDbId } from '../utils/database';
import { DATABASE_PATH } from './consts';

export const postHistory = async (): Promise<void> => {
  const database = DatabaseService.getInstance();

  try {
    const id = generateDbId();

    await set(ref(database, `${DATABASE_PATH.HISTORIES}/${id}`), { id, price: 2000, title: 'test' });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getHistories = async (): Promise<History[]> => {
  const database = DatabaseService.getInstance();

  try {
    const histories: History[] = [];

    const snaps = await get(ref(database, DATABASE_PATH.HISTORIES));
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
    const snaps = await get(ref(database, `${DATABASE_PATH.HISTORIES}/${id}`));

    return snaps.val();
  } catch (error) {
    return Promise.reject(error);
  }
};
