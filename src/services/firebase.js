import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics"; 
import { allProducts } from '../mock/products'; 

const firebaseConfig = {
  apiKey: "AIzaSyCPDY61izirCHTZ0uWf2oIlJZPqMwJo1WY",
  authDomain: "domchiq-11015.firebaseapp.com",
  projectId: "domchiq-11015",
  storageBucket: "domchiq-11015.appspot.com",
  messagingSenderId: "407543676807",
  appId: "1:407543676807:web:fffd435bf98efa2e3d5d22",
  measurementId: "G-2KQF076KRK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export default db;

allProducts.forEach(async (obj) => { 
    try {
        const docRef = await addDoc(collection(db, "produtos"), obj);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
});
