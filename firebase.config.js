import { initializeApp } from 'firebase/app';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDPvxgx2v_hyDWeYoa0fMZotRRA5qAi244',
    authDomain: 'charlie-website-e55f2.firebaseapp.com',
    projectId: 'charlie-website-e55f2',
    storageBucket: 'charlie-website-e55f2.appspot.com',
    messagingSenderId: '51045206277',
    appId: '1:51045206277:web:fd2c5cd9b6e1a1d92a8f6c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;