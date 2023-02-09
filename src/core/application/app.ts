import { Store } from "redux";
import store from "store";
import {ApplicationModels, UserModel} from "core/application/model";
import { getAuthStore } from "core/utils";

import EventEmitter from "core/utils/events";

class Application implements ApplicationModels {
    store: Store;
    dispatch: any;
    user: UserModel | undefined;
    constructor() {
        this.store = store;
        this.dispatch = store.dispatch;
    }

    init(callback?: (status: boolean, resp?: UserModel) => void) {
        const token = getAuthStore();
        if (token && !this.user) {
            /*dispatch init api request*/

            this.user = {
                userId: "",
                fullName: "",
                email: "",
                session: "",
            } as any


            callback && callback(true, this.user)
        } else {
            callback && callback(false)
        }
    }



    logout() {
        this.user = undefined;
        EventEmitter.flush()
        /***dispatch logout api request***/
    }
}

export default Application;