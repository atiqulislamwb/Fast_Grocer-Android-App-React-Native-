// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from '@env';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBmuHIk5YVCl2jenhvMnKHskluMxqMEhmo',
  authDomain: 'fastgrocer-300ac.firebaseapp.com',
  projectId: 'fastgrocer-300ac',
  storageBucket: 'fastgrocer-300ac.appspot.com',
  messagingSenderId: '479424813704',
  appId: '1:479424813704:web:2d69afb55ff094e3dadd3d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
