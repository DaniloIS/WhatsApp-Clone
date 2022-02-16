import { Firebase } from '../util/Firebase';
import { ClassEvent } from '../util/ClassEvent';

export class User extends ClassEvent {

    /*constructor(id) {

        super();

        this._data = {};

        if(id) this.getById(id);

    }

    getById(id) {

        return new Promise((s, f) => {

            

        });

    }*/

    static getRef() {

        return Firebase.db().collection('/users');

    }

    static findByEmail(email) {

        return User.getRef().doc(email);

    }
    
}