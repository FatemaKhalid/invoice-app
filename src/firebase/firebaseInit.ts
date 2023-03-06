// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAmUobG9SG6okzoWJsGqE-rcxc0tQZ1Sb8',
  authDomain: 'vuex-invoice-app.firebaseapp.com',
  projectId: 'vuex-invoice-app',
  storageBucket: 'vuex-invoice-app.appspot.com',
  messagingSenderId: '119491048568',
  appId: '1:119491048568:web:888e06b7e93ac2e278a98d'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
