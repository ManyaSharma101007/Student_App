import * as firebase from 'firebase';
require ("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAUbpdmkMDph6Mjj0yUIVySHA2g2-zS5Qo",
    authDomain: "student-tracking-app-9cb41.firebaseapp.com",
    projectId: "student-tracking-app-9cb41",
    storageBucket: "student-tracking-app-9cb41.appspot.com",
    messagingSenderId: "614918144233",
    appId: "1:614918144233:web:34e6bba1bbe77c4c9c3078"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase.firestore() ;