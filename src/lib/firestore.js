
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function addRecipe(recipe) {
  try {
    const docRef = await addDoc(collection(db, "recipes"), recipe);
    return docRef.id;
  } catch (error) {
    console.error("Error adding recipe:", error);
    throw error;
  }
}
