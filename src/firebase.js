import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyD7s4YwdLcD7sTXq3QiJNfnmQaf2w5f4Z0",
  authDomain: "todoist-99ba3.firebaseapp.com",
  databaseURL: "https://todoist-99ba3.firebaseio.com",
  projectId: "todoist-99ba3",
  storageBucket: "todoist-99ba3.appspot.com",
  messagingSenderId: "822123543439",
  appId: "1:822123543439:web:d8ba639f3a44d481b069fa",
  measurementId: "G-WZ9432FPJ9"
});

export { firebaseConfig as firebase };
