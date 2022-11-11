import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBmU1J2RgOfm1ezqal-9xO7sguM6NfYb4c",
  authDomain: "tiendazarate-6a7e5.firebaseapp.com",
  projectId: "tiendazarate-6a7e5",
  storageBucket: "tiendazarate-6a7e5.appspot.com",
  messagingSenderId: "888403458332",
  appId: "1:888403458332:web:77198bc867acc781f6e2d9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
