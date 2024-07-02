import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAuxvXgLlWv6KQ8PvE1I9-bSfFYE_aqms8",
  authDomain: "miniblog-8c3b1.firebaseapp.com",
  projectId: "miniblog-8c3b1",
  storageBucket: "miniblog-8c3b1.appspot.com",
  messagingSenderId: "176911510137",
  appId: "1:176911510137:web:5ba00d9c07499f404482a8"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db}