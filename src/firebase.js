import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCA_ubBlOWXhD1QwnL0nz2CGmwiL33heCQ",
    authDomain: "react--clone-51bf3.firebaseapp.com",
    projectId: "react--clone-51bf3",
    storageBucket: "react--clone-51bf3.appspot.com",
    messagingSenderId: "727478254317",
    appId: "1:727478254317:web:b93da5a233b197c07d2ae4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };