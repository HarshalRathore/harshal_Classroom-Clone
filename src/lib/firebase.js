import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApO0ibWGKKwC4Rl6PG2HmQta1zaDCwWqg",

  authDomain: "classroom-clone-dbeba.firebaseapp.com",

  projectId: "classroom-clone-dbeba",

  storageBucket: "classroom-clone-dbeba.appspot.com",

  messagingSenderId: "905021199585",

  appId: "1:905021199585:web:9b311845759fd0423ad3a0",

  measurementId: "G-K8C9P41ZS1"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
