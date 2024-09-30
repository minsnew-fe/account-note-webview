import { get, ref, remove, set } from 'firebase/database';
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

export const isValidAccountName = async (name: string): Promise<boolean> => {
  const database = DatabaseService.getInstance();

  try {
    const snaps = await get(ref(database, `${DATABASE_PATH.ACCOUNTS}?name=${name}`));
    return !snaps.val();
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

export const getAccount = async (id: string): Promise<Account> => {
  const database = DatabaseService.getInstance();

  try {
    const snaps = await get(ref(database, `${DATABASE_PATH.ACCOUNTS}/${id}`));

    return snaps.val();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const removeAccount = async (id: string): Promise<void> => {
  const database = DatabaseService.getInstance();

  try {
    await remove(ref(database, `${DATABASE_PATH.ACCOUNTS}/${id}`));
  } catch (error) {
    return Promise.reject(error);
  }
};
