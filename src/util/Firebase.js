import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



export class Firebase {

    constructor() {

        this._db;
        this._storage;
        this._config = {

            apiKey: "AIzaSyABF0oUat_c9arNJ9WSfcQj1JGuCACTGuA",
            authDomain: "whatsapp-clone-6ad27.firebaseapp.com",
            projectId: "whatsapp-clone-6ad27",
            storageBucket: "whatsapp-clone-6ad27.appspot.com",
            messagingSenderId: "271772377260",
            appId: "1:271772377260:web:79c0b0a92c59ad4c34bf09",
            measurementId: "G-TDRBHSM4LV"
          
        };

        this.init();

    }

    init() {

        if(!window._initializedFirebase) {
            const app = initializeApp(this._config);
            this._db = getFirestore(app);
            this._storage = getStorage(app);

            
            /*firebase.firestore().settings({
                timestampsInSnapshots: true
            });*/

            window._initializedFirebase = true;
        }

    }

    static db() {
        //return getDocs(collection(this._db, value));
        return this._db;
    }

    static hd() {
        return this._storage;
    }

    initAuth() {

        return new Promise((s, f) => {

            const provider = new GoogleAuthProvider();
            
            const auth = getAuth();
            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                s({user, token});
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                f(error);
            });
        });

    }

}