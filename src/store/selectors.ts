import {createSelector} from "reselect";
import {get} from "lodash-es";

export const getAuthToken = createSelector((state: any) => get(state, ["auth_token"], null), token => token);