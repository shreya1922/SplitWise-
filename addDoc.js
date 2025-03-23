import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';  // Assuming firebase.js is in the same folder

const addExpenseToFirebase = async (name, amount) => {
  try {
    const docRef = await addDoc(collection(db, "expenses"), {
      name: name,
      amount: parseFloat(amount), // Ensure it's a number
      timestamp: new Date(),
    });

    console.log("Expense added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
