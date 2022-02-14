const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

    constructor() {

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

        if(!this._initialized) {
            firebase.initializeApp(this._config);
            
            firebase.firestore().settings({
                timestampsInSnapshots: true
            });

            this._initialized = true;
        }

    }

    static db() {
        return firebase.firestore();
    }

    static hd() {
        return firebase.storage();
    }

}