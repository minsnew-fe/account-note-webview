import { get, ref, set } from 'firebase/database';
import DatabaseService from './database';
import { Account } from '../common/models/account';
import { DATABASE_PATH } from './consts';

export const postAccount = async (id: string, account: Account): Promise<void> => {
  const database = DatabaseService.getInstance();

  try {
    await set(ref(database, `${DATABASE_PATH.ACCOUNTS}/${id}`), account);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAccounts = async (): Promise<Account[]> => {
  const database = DatabaseService.getInstance();

  try {
    const accounts: Account[] = [];

    const snaps = await get(ref(database, DATABASE_PATH.ACCOUNTS));
    snaps?.forEach((snap) => {
      accounts.push(snap.val());
    });

    return accounts;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAccount = async (): Promise<Account> => {
  const database = DatabaseService.getInstance();

  try {
    const snaps = await get(ref(database, DATABASE_PATH.ACCOUNTS));

    return snaps.val();
  } catch (error) {
    return Promise.reject(error);
  }
};
