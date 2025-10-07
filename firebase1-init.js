// ✅ Import Firebase modules (v9+ modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB5VyoTwvMuUBUY9bfCnWvDagG3Z_kPdXU",
  authDomain: "alpha-413814.firebaseapp.com",
  projectId: "alpha-413814",
  storageBucket: "alpha-413814.firebasestorage.app",
  messagingSenderId: "1094932957286",
  appId: "1:1094932957286:web:21671340efe6f52833c5a7",
  measurementId: "G-H24BWD5BPF"
};

// ✅ Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Example: Add data
async function addUserData() {
  await addDoc(collection(db, "users"), {
    name: "Pavan",
    role: "Admin",
    createdAt: new Date()
  });
  console.log("✅ Data added to Firestore!");
}

// Example: Read data
async function readUserData() {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
}

// Optionally call functions:
addUserData();
readUserData();

