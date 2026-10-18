import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database" 

const firebaseConfig = {
  apiKey: "AIzaSyDpqPpLfqSol285TfNoSIK1iIopDAMfd-U",
  authDomain: "minecraft-diary-b2742.firebaseapp.com",
  databaseURL: "https://minecraft-diary-b2742-default-rtdb.firebaseio.com",
  projectId: "minecraft-diary-b2742",
  storageBucket: "minecraft-diary-b2742.firebasestorage.app",
  messagingSenderId: "770354279139",
  appId: "1:770354279139:web:8772456dbdcafa18608bd6",
  measurementId: "G-LPVNKYD714"
};

const app = initializeApp(firebaseConfig);

export default getDatabase(app);
