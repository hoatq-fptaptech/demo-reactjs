import  firebase  from '@firebase/app'
import "firebase/firestore";
import "firebase/auth";
firebase.initializeApp({
    apiKey: 'AIzaSyA58CP0AJqEe7Yfb2zYXtsLIJ8j5YmR_T0',
    authDomain: 'decisive-sylph-253715.firebaseapp.com',
    projectId: 'decisive-sylph-253715'
});
const db = firebase.firestore();
export default db;