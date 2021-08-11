import firebase from 'firebase'
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBPnvuFx42PldwSSRgq6V0TIUjTWBB80xs",
    authDomain: "facebook-post-clone.firebaseapp.com",
    projectId: "facebook-post-clone",
    storageBucket: "facebook-post-clone.appspot.com",
    messagingSenderId: "126451042074",
    appId: "1:126451042074:web:a68dd013ee7e51fdbd4ea3"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore()
  const storage = firebase.storage();

  export {db,storage}