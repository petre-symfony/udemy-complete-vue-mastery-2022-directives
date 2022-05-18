import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD0LUlB9icA44NwAsqhHgXVs_jfhbEJOqc",
  authDomain: "music-7d294.firebaseapp.com",
  projectId: "music-7d294",
  storageBucket: "music-7d294.appspot.com",
  appId: "1:884671287793:web:6672f715c2fb2a01eef450"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const commentsCollection = db.collection('comments');

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
