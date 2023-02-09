import * as React from "react"
import AuthRoutesHelper from "./routes-helper";
import AuthRoutes from "./routes";
import InitLoader from "views/placeholder/init-loader";

const AuthLayouts = function (props: any) {
    return (<React.Suspense fallback={<InitLoader/>}>
        <div className={"auth__context__wrapper"}>
            <div className={"auth__layouts__context"}>
                <AuthRoutesHelper routes={[AuthRoutes]} />
            </div>
        </div>
    </React.Suspense>)
}
export default AuthLayouts