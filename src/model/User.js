import { ClassEvent } from '../util/ClassEvent';
import { Firebase } from './../util/Firebase';
import { doc, setDoc } from 'firebase/firestore';

export class User extends ClassEvent {

    static getRef() {

        //return Firebase.db('/users');

    }

    static findByEmail(email, user) {

        //return setDoc(doc(Firebase.db(), 'users', email), user);

    }
    
}