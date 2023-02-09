import CreateRequest from "core/xhr";
import {setAuthStore} from "core/utils";
import {updateAuthToken} from "store/actions";


interface LoginBody {
    email: string,
    password: string
}


export const loginRequest = ( body: LoginBody, callback: (a0: boolean, res?: any) => void ) => {
    return (dispatch: (arg0: any) => void) => {

        return CreateRequest({
            url: "/auth/login",
            method: 'post',
            data: body
        }).then( res => {
            if (res?.data?.token) {
                setAuthStore(res.data.token)
                dispatch(updateAuthToken(res.data.token))
                callback(true, res.data)
            } else {
                callback(false)
            }
        }).catch(() => {
            callback(false)
        });
    }
}
