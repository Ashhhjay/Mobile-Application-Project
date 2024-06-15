// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEkD3OPe7IEHWazgu7LGWt7c0T6dafYyE",
    authDomain: "network-app-b94f0.firebaseapp.com",
    projectId: "network-app-b94f0",
    storageBucket: "network-app-b94f0.appspot.com",
    messagingSenderId: "549155416631",
    appId: "1:549155416631:web:ab0a74d77b028a7c352db2"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { app, auth };