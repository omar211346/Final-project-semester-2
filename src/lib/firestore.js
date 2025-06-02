
import { collection, addDoc, getDocs } from "firebase/firestore";
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

export async function getAllRecipes() {
  try {
    const snapshot = await getDocs(collection(db, "recipes"));
    const recipes = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
}
