import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM7P_p5mfiMwv8y9i67KEO74IS2L2AVQo",
  authDomain: "radio-station-351010.firebaseapp.com",
  projectId: "radio-station-351010",
  storageBucket: "radio-station-351010.appspot.com",
  messagingSenderId: "623187840357",
  appId: "1:623187840357:web:2af80af934bf99c472e58c",
  measurementId: "G-5B3B4YR7LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);