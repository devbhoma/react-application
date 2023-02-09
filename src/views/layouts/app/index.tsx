import * as React from "react"
import AppRoutes from "./routes/routes";
import AppRoutesHelper from "views/layouts/app/routes/helper";
import InitLoader from "views/placeholder/init-loader";

const AppLayouts = function () {
    return (<React.Suspense fallback={<InitLoader/>}>
        <div className={`app-layouts__context show-main-sidebar`}>
            <AppRoutesHelper routes={AppRoutes}/>
        </div>
    </React.Suspense>)
}

export default AppLayouts