// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app'
import { getMessaging, isSupported } from 'firebase/messaging'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const initialize = (
  FIREBASE_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MSG_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
) => {
  const firebaseConfig = {
  apiKey: "AIzaSyCCYOxTQBBj0Jf-Ld1d9GNubCVKrplH4a8",
  authDomain: "foodtakeaway-79d22.firebaseapp.com",
  projectId: "foodtakeaway-79d22",
  storageBucket: "foodtakeaway-79d22.appspot.com",
  messagingSenderId: "442864222",
  appId: "1:442864222:web:b2d25eb01fe8b1f29d1acf",
  measurementId: "G-JYKSLFP47H"
  }

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig)
  const messaging = getMessaging(app)
  return messaging
}

export const isFirebaseSupported = async() => {
  return await isSupported()
}
