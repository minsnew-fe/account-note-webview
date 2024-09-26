import { initializeApp } from 'firebase/app';
import { Database, getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAbffqngw74ZqYnauWZRDYiMKY6bWQP91Y',
  authDomain: 'account-note-1bea7.firebaseapp.com',
  databaseURL: 'https://account-note-1bea7-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'account-note-1bea7',
  storageBucket: 'account-note-1bea7.appspot.com',
  messagingSenderId: '724959034932',
  appId: '1:724959034932:web:3e04e1c43f30298ea61461',
  measurementId: 'G-RC0BPPFMTN',
};

class DatabaseService {
  private static instance: Database | null = null;

  constructor() {}

  public static initialize() {
    console.log('init database');
    const app = initializeApp(firebaseConfig);
    this.instance = getDatabase(app);
  }

  public static getInstance() {
    if (this.instance === null) {
      const app = initializeApp(firebaseConfig);
      this.instance = getDatabase(app);
    }

    return this.instance;
  }
}

export default DatabaseService;
