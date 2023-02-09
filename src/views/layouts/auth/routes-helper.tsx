import * as React from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import NotFound from "views/placeholder/NotFound";
import {useNavigate} from "react-router";
import InitLoader from "views/placeholder/init-loader";

export interface AuthPatternsOfRoutes {
    slug: string
    breadcrumbs?: any
    sidebar?: any
    items: Array<{
        pattern: Array<string>
        component: any
        breadcrumbs?: any
        sidebar?: any
        sidebarWithBreadcrumbs?: boolean
        slug?: any
    }>
}

export interface AuthRoutesPatternsProps {
    routes: Array<AuthPatternsOfRoutes>
}

const AuthRoutesHelper = React.memo(function (props: AuthRoutesPatternsProps) {
    const {routes} = props;

    const location = useLocation()
    const loginNav = location.pathname !==  "/auth/login";
    const navigate = useNavigate()

    return <React.Suspense fallback={<InitLoader/>}>
        <Routes>
            {routes.map( module => {
                return module.items.map(v => {
                    return v.pattern.map((path, key) => {
                        const ElementComponent = v.component
                        const url = (v.slug ? v.slug : module.slug) + path
                        return <Route key={key} path={url} element={<React.Suspense fallback={
                            <InitLoader/>
                        }>
                            <ElementComponent path={url} navigate={navigate}/>
                        </React.Suspense>}/>
                    })
                })
            })}

            {!loginNav && <>
                <Route path={"/404"} element={<NotFound/>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
            </> }
            {loginNav && <Route path="*" element={<Navigate to="/auth/login"/>}/>}

        </Routes>

    </React.Suspense>
})


export default AuthRoutesHelper