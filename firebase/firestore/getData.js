import firebase_app from "../config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app);

export async function getProducts() {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    const products = snapshot.docs.map(doc => doc.data());
    return products;
}

export async function getReviews() {
    const reviewsRef = collection(db, 'reviews');
    const snapshot = await getDocs(reviewsRef);
    const reviews = snapshot.docs.map(doc => doc.data());
    return reviews;
}