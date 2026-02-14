// ============================================================================
// FIREBASE CONFIGURATION - Database connection for saving contact form data
// ============================================================================
// This file connects the website to Firebase Firestore (Google's database)
// When customers fill out the contact form, their information is saved here
// ============================================================================

import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore, collection, addDoc } from "firebase/firestore"

// Firebase project credentials - connects to Alarmax's Firebase account
const firebaseConfig = {
  apiKey: "AIzaSyC9jgek2vKiHASPl1kY8hDh7WMDs1q_jQw",
  authDomain: "alarmaxoficial.firebaseapp.com",
  projectId: "alarmaxoficial",
}

// Initialize Firebase app (but only on the client side, not during server rendering)
// This prevents errors when Next.js tries to render pages on the server
function getFirebaseApp() {
  // Check if we're running in a browser (window object only exists in browsers)
  if (typeof window === "undefined") return null

  // Only initialize Firebase once - if it's already initialized, reuse the existing app
  return getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
}

// Function to save contact form submissions to the database
// This is called when a customer clicks "Submit" on the contact form
export async function submitContactForm(data: {
  name: string // Customer's full name
  phone: string // Customer's phone number
  email: string // Customer's email address
  services: string[] // Array of services they're interested in (e.g., ["cctv", "alarms"])
  message: string // Optional message from the customer
  language: string // Which language they were using (es or en)
}) {
  // Get the Firebase app instance
  const app = getFirebaseApp()
  if (!app) {
    throw new Error("Firebase not initialized")
  }

  // Get reference to the Firestore database
  const db = getFirestore(app)

  // Add the form data to the "contactSubmissions" collection in Firestore
  // Each submission becomes a new document with a unique ID
  const docRef = await addDoc(collection(db, "contactSubmissions"), {
    ...data, // Spread all the form data (name, phone, email, etc.)
    createdAt: new Date().toISOString(), // Add timestamp when form was submitted
    status: "new", // Mark as "new" so Alarmax team knows it hasn't been reviewed yet
  })

  // Log success message (visible in browser console for debugging)
  console.log("Document written with ID:", docRef.id)
  return docRef.id
}
