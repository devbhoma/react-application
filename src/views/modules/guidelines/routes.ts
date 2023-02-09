import * as React from "react";
import {PatternsOfRoutes} from "views/layouts/app/routes/helper";


export const GuidelinesRoutes: PatternsOfRoutes = {
    moduleName: "guidelines",
    slug: "/guidelines",
    items: [
        {
            pattern: [
                "/",
                ":/component",
            ],
            component: React.lazy(() => import(`views/modules/guidelines/index`))
        }
    ]
}
export default GuidelinesRoutes