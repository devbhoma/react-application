import {combineReducers} from "redux";
import {createReducer} from "core/utils/create_reducer";
import {getAuthStore} from "core/utils";

export default combineReducers({
    auth_token: createReducer(getAuthStore(), {
        ["UPDATE_AUTH_TOKEN"]: (state, action) => {
            if (typeof action.token !== "undefined")
                return action.token
            return state
        }
    }),
})