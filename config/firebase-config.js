// Firebase Configuration
// Replace these values with your Firebase project configuration
// Get these from: Firebase Console → Project Settings → Your Apps → Web

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase (uncomment to use)
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, push } from "firebase/database";
// 
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// 
// // Function to submit to Firebase
// async function submitToFirebase(data) {
//   try {
//     const submissionsRef = ref(database, 'submissions');
//     await push(submissionsRef, {
//       ...data,
//       submittedAt: new Date().toISOString()
//     });
//     return { success: true };
//   } catch (error) {
//     console.error('Firebase error:', error);
//     throw error;
//   }
// }

export const config = firebaseConfig;
