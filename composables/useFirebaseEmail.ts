import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export function useFirebaseEmail() {
    const config = useRuntimeConfig();
    const firebaseConfig = {
        apiKey: config.public.FIREBASE_API_KEY,
        authDomain: config.public.FIREBASE_AUTH_DOMAIN,
        projectId: config.public.FIREBASE_PROJECT_ID,
        storageBucket: config.public.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: config.public.FIREBASE_MESSAGING_SENDER_ID,
        appId: config.public.FIREBASE_APP_ID,
    };

    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);
    const MAIL_COLLECTION_NAME = "mail";

    type Email = {
        to: String;
        subject: String;
        html: String;
    };

    async function sendEmail(email: Email) {
        const docRef = await addDoc(collection(db, MAIL_COLLECTION_NAME), {
            to: email.to,
            message: {
                subject: email.subject,
                html: email.html,
            },
        });
        console.log("Email sent with doc ID: ", docRef.id);
    }

    return {
        sendEmail,
    };
}
