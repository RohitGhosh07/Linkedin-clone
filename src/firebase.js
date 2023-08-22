import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBlbfXVXp0S7YXUJdayUAcf4gZ1Dy0Fz_I",
    authDomain: "linkedin-clone-cad7a.firebaseapp.com",
    projectId: "linkedin-clone-cad7a",
    storageBucket: "linkedin-clone-cad7a.appspot.com",
    messagingSenderId: "686326315094",
    appId: "1:686326315094:web:bda47367389729f06c23f7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;