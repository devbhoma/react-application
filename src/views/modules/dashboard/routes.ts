import * as React from "react";
import {PatternsOfRoutes} from "views/layouts/app/routes/helper";

const DashboardRoutes: PatternsOfRoutes = {
    moduleName: "dashboard",
    slug: "/dashboard",
    breadcrumbs: React.lazy(() => import("views/modules/dashboard/breadcrumbs")),
    items: [
        {
            pattern: [
                "/",
            ],
            component: React.lazy(() => import("views/modules/dashboard/index")),
            breadcrumbTitle: "Dashboard",
        }
    ]
}
export default DashboardRoutes