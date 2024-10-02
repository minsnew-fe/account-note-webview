import { get, ref, remove, set } from 'firebase/database';
import DatabaseService from './database';
import { Subject } from '../common/models/subject';
import { DATABASE_PATH } from './consts';

export const postSubject = async (id: string, subject: Subject): Promise<void> => {
  const database = DatabaseService.getInstance();

  try {
    await set(ref(database, `${DATABASE_PATH.SUBJECTS}/${id}`), subject);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const isValidSubjectName = async (name: string): Promise<boolean> => {
  const database = DatabaseService.getInstance();

  try {
    const snaps = await get(ref(database, `${DATABASE_PATH.SUBJECTS}?name=${name}`));
    return !snaps.val();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getSubjects = async (): Promise<Subject[]> => {
  const database = DatabaseService.getInstance();

  try {
    const subjects: Subject[] = [];

    const snaps = await get(ref(database, DATABASE_PATH.SUBJECTS));
    snaps?.forEach((snap) => {
      subjects.push(snap.val());
    });

    return subjects;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getSubject = async (id: string): Promise<Subject> => {
  const database = DatabaseService.getInstance();

  try {
    const snaps = await get(ref(database, `${DATABASE_PATH.SUBJECTS}/${id}`));

    return snaps.val();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const removeSubject = async (id: string): Promise<void> => {
  const database = DatabaseService.getInstance();

  try {
    await remove(ref(database, `${DATABASE_PATH.SUBJECTS}/${id}`));
  } catch (error) {
    return Promise.reject(error);
  }
};
