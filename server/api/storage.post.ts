import firestore from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export default defineEventHandler(async (event) => {
    const docRef = doc(firestore, "index", "ku1LNNXqc7JY7ZUToHoq");
    const docSnap = await getDoc(docRef);
    const text = docSnap.data();
    await useStorage().setItem("storage", text);

    return "Saved.";
});
