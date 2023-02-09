import * as React from "react";
import AppLayouts from "./layouts/app";
import AuthLayouts from "./layouts/auth";
import InitLoader from "./placeholder/init-loader";
import AppContext from "core/providers/context";
import {getAuthStore} from "core/utils";
import {useContext} from "react";

const LayoutViews = (props: any) => {
    const {application, changeContext} = useContext(AppContext);

    const isAuthorised = getAuthStore()

    return (<React.Suspense fallback={<InitLoader/>}>
        <div className={`context__root__wrapper`} >
            {isAuthorised ? <AppLayouts/> : <AuthLayouts/>}
        </div>
    </React.Suspense>)
}

export default LayoutViews
