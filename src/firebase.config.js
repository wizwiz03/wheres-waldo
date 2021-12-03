import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDjzPK0v00nka_F0uYlsuMTZYTVu0lTooI",
  authDomain: "wheres-waldo-6cf28.firebaseapp.com",
  projectId: "wheres-waldo-6cf28",
  storageBucket: "wheres-waldo-6cf28.appspot.com",
  messagingSenderId: "552902351964",
  appId: "1:552902351964:web:134a2600989c793e411a99",
  measurementId: "G-EYX0VMGBDC"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };