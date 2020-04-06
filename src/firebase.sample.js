import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN.firebaseapp.com",
  databaseURL: "https://DATABASE_URL.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET.appspot.com",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
  measurementId: "MEASUREMENT_ID",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
