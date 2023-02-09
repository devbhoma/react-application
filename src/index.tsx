import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import Store from "store";
import LayoutViews from "views";
import AppProvider from "core/providers";

const App = () => (<React.StrictMode>
        <Provider store={Store}>
            <AppProvider>
                <Router>
                    <LayoutViews/>
                </Router>
            </AppProvider>
        </Provider>
    </React.StrictMode>
);

ReactDOM.render(<App/>, document.getElementById("main__app-root"));