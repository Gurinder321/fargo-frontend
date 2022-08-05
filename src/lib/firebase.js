import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyB2HhWQFJ7S8hEeqZdptgJQQ2r4jboQOus',
  authDomain: 'instagram-yt-e2dd4.firebaseapp.com',
  projectId: 'instagram-yt-e2dd4',
  storageBucket: 'instagram-yt-e2dd4.appspot.com',
  messagingSenderId: '573594088417',
  appId: '1:573594088417:web:01cf25cfc4693f4e6198a0',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
