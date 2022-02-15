import { ClassEvent } from '../util/ClassEvent';
import { Firebase } from './../util/Firebase';
import { doc, setDoc } from 'firebase/firestore';

export class User extends ClassEvent {

    constructor(id) {

        super();

        this._data = {};

        if(id) this.getById(id);

    }

    getById(id) {

        return new Promise((s, f) => {

            

        });

    }

    static getRef() {

        //return Firebase.db('/users');

    }

    static findByEmail(email, user) {

        //return setDoc(doc(Firebase.db(), 'users', email), user);

    }
    
}