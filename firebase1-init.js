// Load Firebase via CDN and use global variables

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB5VyoTwvMuUBUY9bfCnWvDagG3Z_kPdXU",
  authDomain: "alpha-413814.firebaseapp.com",
  projectId: "alpha-413814",
  storageBucket: "alpha-413814.firebasestorage.app",
  messagingSenderId: "1094932957286",
  appId: "1:1094932957286:web:21671340efe6f52833c5a7",
  measurementId: "G-H24BWD5BPF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Example: Add data (call this from a button, not directly!)
async function addUserData() {
  await db.collection("users").add({
    name: "Pavan",
    role: "Admin",
    createdAt: new Date()
  });
  console.log("✅ Data added to Firestore!");
}

// Example: Read data
async function readUserData() {
  const querySnapshot = await db.collection("users").get();
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
}

// Optionally expose these functions to window or call them from user actions
// window.addUserData = addUserData;
// window.readUserData = readUserData;
