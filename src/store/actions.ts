import {UPDATE_AUTH_TOKEN} from "store/constant";

export const updateAuthToken = (token: any) => {
    return {type: UPDATE_AUTH_TOKEN, token}
}

