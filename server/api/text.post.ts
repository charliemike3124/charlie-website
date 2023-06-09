import firestore from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";

export default defineEventHandler(async (event) => {
    const docRef = doc(firestore, "index", "ku1LNNXqc7JY7ZUToHoq");
    const body = await readBody(event);
    await setDoc(docRef, body);
    await useStorage().setItem("storage", body);

    return "Saved.";
});
