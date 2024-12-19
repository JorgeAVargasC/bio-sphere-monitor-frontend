import { FirebaseOptions, initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig: FirebaseOptions = {
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
}

const app = initializeApp(firebaseConfig)

export const realtimeDB = getDatabase(app)
