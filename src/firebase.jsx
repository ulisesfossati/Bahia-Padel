import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDApqlDrDiIs2NQGUZEBMDgsFdBSdpQE9I",
    authDomain: "bahiapadel-4113f.firebaseapp.com",
    projectId: "bahiapadel-4113f",
    storageBucket: "bahiapadel-4113f.firebasestorage.app",
    messagingSenderId: "455644174046",
    appId: "1:455644174046:web:268cbf6138d1155055544f"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };