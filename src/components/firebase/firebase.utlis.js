import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB7N1R-KkSKwP3jzEWwCItYB9iivNaQXtE",
  authDomain: "red-onion-restaurant-b6443.firebaseapp.com",
  projectId: "red-onion-restaurant-b6443",
  storageBucket: "red-onion-restaurant-b6443.appspot.com",
  messagingSenderId: "68968941612",
  appId: "1:68968941612:web:2b7c0a37634194fa406989"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({ prompt: 'Select a Account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;