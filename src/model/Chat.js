import { Firebase } from "../util/Firebase";
import { Model } from "./Model";

export class Chat extends Model {

    constructor() {

        super();

    }

    get users() {
        return this._data.users;
    }

    get users(value) {
        return this._data.users = value;
    }

    get timeStamp() {
        return this._data.timeStamp;
    }

    get timeStamp(value) {
        return this._data.timeStamp = value;
    }

    static getRef() {

        return Firebase.db().collection('/chats');

    }

    static find(meEmail, contactEmail) {

        Chat.getRef()
            .where(btoa(meEmail), '==', true)
            .where(btoa(contactEmail), '==', true)
            .get();

    }

    static createIfNotExists(meEmail, contactEmail) {

        return new Promise((s, f) => {

            Chat.find(meEmail, contactEmail).then(chats => {

                if(chats.empty) {

                    Chat.create(meEmail, contactEmail).then(chat => {
                        s(chat);
                    });

                } else {

                    chats.forEach(chat => {
                        s(chat);
                    });

                }

            }).catch(err => {
                f(err);
            });

        });

    }

}