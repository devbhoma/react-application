import * as React from "react";

const AuthRoutes = {
    slug: '/auth',
    items: [
        {
            pattern: [
                "/login",
            ],
            component: React.lazy(() => import("views/layouts/auth/components/login"))
        },
        {
            pattern: [
                "/register"
            ],
            component: React.lazy(() => import("views/layouts/auth/components/register"))
        },
    ]
}
export default AuthRoutes

