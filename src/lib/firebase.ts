// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCPqMX91-FxRIRiq7D9IONy4_qp4UymC1w',
  authDomain: 'technet-16117.firebaseapp.com',
  projectId: 'technet-16117',
  storageBucket: 'technet-16117.appspot.com',
  messagingSenderId: '408433655408',
  appId: '1:408433655408:web:c6435227a61d3c5b073eb5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
