import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

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
    const recipes = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate?.() || new Date(), 
      };
    });
    return recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
}

export async function getRecipeById(id) {
  try {
    const docRef = doc(db, "recipes", id);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    } else {
      throw new Error("Recipe not found");
    }
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
}

export async function updateRecipe(id, updatedData) {
  try {
    const docRef = doc(db, "recipes", id);
    await updateDoc(docRef, updatedData);
  } catch (error) {
    console.error("Error updating recipe:", error);
    throw error;
  }
}

export async function deleteRecipe(id) {
  try {
    const docRef = doc(db, "recipes", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting recipe:", error);
    throw error;
  }
}
