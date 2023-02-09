import {createContext} from "react";
import {ApplicationModels, UserModel} from "core/application/model";

export interface ChangeContextProps {
    key: 'isAuthenticated' | 'user',
    value: any,
}

export interface ContextProps {
    changeContext: (obj: ChangeContextProps) => any;
    application: ApplicationModels;
    isAuthenticated: boolean;
    user: UserModel | undefined;
}

const AppContext = createContext({} as ContextProps);
export default AppContext;