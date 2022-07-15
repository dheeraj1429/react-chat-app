import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1IawjXhpUdXt8iv5lGGDZgEmOZlkWiAc",
    authDomain: "divi-beta-app.firebaseapp.com",
    projectId: "divi-beta-app",
    storageBucket: "divi-beta-app.appspot.com",
    messagingSenderId: "693602153944",
    appId: "1:693602153944:web:9cc09fa16349f2efb52ead",
};

// CREATE USER PRODILE
export const CreateUserProfileDoc = async function (userAuth) {
    if (!userAuth) return;

    const userRef = firebase.firestore().doc(`users/${userAuth.uid}`);
    const snapShot = userRef.get();

    if (!(await snapShot).exists) {
        try {
            const { displayName, email, photoURL } = userAuth;
            const entrytime = new Date();

            await userRef.set({
                displayName,
                email,
                photoURL,
                entrytime,
                admin: "user",
            });
        } catch (err) {
            console.log(err);
        }
    }
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
