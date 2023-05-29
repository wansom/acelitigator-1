import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from "firebase/auth";

const config = {
	apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
	authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.VUE_APP_FIREBASE_APP_ID,
	measurementId:process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
	databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL
  };

const app=initializeApp(config)

export const firestoreDb = getFirestore(app)
export const realtimeDb = getDatabase(app)
export const storage = getStorage(app)
export const auth =getAuth(app)
