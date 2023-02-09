import React, {useEffect, useState} from "react";
import AppContext, {ChangeContextProps, ContextProps} from "./context";
import {connect} from "react-redux";
import {getAuthToken} from "store/selectors";
import Application from "core/application/app";
import {getAuthStore} from "core/utils";
import {UserModel} from "core/application/model";

const AppProvider = (props: any) => {
    const initialState: ContextProps = {
        changeContext: (obj: ChangeContextProps) => {
            setValue((state: any) => {
                return {...state, [obj.key]: obj.value}
            });
        },
        application: new Application(),
        isAuthenticated: !!getAuthStore(),
        user: undefined,
    }

    const [state, setValue] = useState<ContextProps>(initialState);


    useEffect(() => {
        if (state.isAuthenticated) {
            state.application.init((status: boolean, user:any) => {

                setValue({
                    ...state,
                    user,
                })
            });

        }
    }, [])
    return (<AppContext.Provider value={state}>
        {props.children}
    </AppContext.Provider>)
};
export default connect((state) => {
    return {
        isAuthorised: getAuthToken(state),
    }
}, {

})(AppProvider)