import { initializeApp } from "firebase/app";
import { getFirestore,collection } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'

const firebaseConfig =  {
	apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
	authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.VUE_APP_FIREBASE_APP_ID,
	measurementId:process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
	databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL
  };

const app =initializeApp(firebaseConfig);

// utils
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// collection references
const usersCollection = collection(db,"nigeria_advocates");
const businessCollection = collection(db,"clients");
const adminCollections =collection(db,"admins");
const mpesaCollection =collection(db,"mpesa_responses");
const transactions = collection(db,"transactions");
const courtCollection= collection(db,"courts")

// export utils/refs

export {
  db,
  auth,
  storage,
  usersCollection,
  businessCollection,
  adminCollections,
  mpesaCollection,
  transactions,
  courtCollection
};