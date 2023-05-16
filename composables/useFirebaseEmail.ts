import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../firebase.config';

export function useFirebaseEmail () {
    const db = getFirestore(app);
    const MAIL_COLLECTION_NAME = 'mail';

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
        console.log('Email sent with doc ID: ', docRef.id);
    }

    return {
      sendEmail
    }
};
