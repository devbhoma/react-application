import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import CombinedReducers from "./reducers";


const InitialState = {

}

const Store = createStore(
    CombinedReducers,
    InitialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

(<any>window).getState = Store.getState

export default Store