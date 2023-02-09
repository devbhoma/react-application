import { Store } from "redux";


export type UserModel = {
    userId: number;
    fullName: string;
    email: string;
    session: string;
}

export interface ApplicationModels {
    store: Store | undefined;
    dispatch: any;
    user: UserModel | undefined;
    init: (callback?: (status: boolean, resp?: UserModel) => void) => void;
    logout: (cb: () => void) => void;
}
