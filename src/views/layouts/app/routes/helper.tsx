import * as React from "react";
import {useNavigate} from "react-router";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import NotFound from "views/placeholder/NotFound";
import MainBreadcrumbs from "views/layouts/app/breadcrumbs";
import InitLoader from "views/placeholder/init-loader";
import MainSidebar from "views/layouts/app/sidebar";
import classNames from "classnames";
import { useRef} from "react";
import useQuery from "core/components/query";

export interface PatternsOfRoutes {
    moduleName: string
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
        breadcrumbTitle?: string;
        helloBar?: any;
    }>
}

export interface Props {
    routes: Array<PatternsOfRoutes>
}
const AppRoutesHelper = React.memo(function (props: Props) {
    const location = useLocation()
    const {routes} = props;
    const siteNav = location.pathname ===  "/";
    const defaultNav = location.pathname !==  "/dashboard";
    const navigate = useNavigate()
    const query = useQuery()


    return <React.Suspense fallback={<InitLoader/>}>
        <Routes>

            { routes.map( module => {
                const ModuleBreadcrumbs = module.breadcrumbs
                const ModuleSidebar = module.sidebar
                const ModuleSlug = (module.slug || "")
                return module.items.map(v => {

                    return v.pattern.map((path, key) => {
                        const ElementComponent = v.component
                        const BreadcrumbsComponent = v.breadcrumbs
                        const SidebarComponent = v.sidebar
                        const HelloBarComponent = v.helloBar
                        const url = (v.slug ? v.slug : ModuleSlug) + path

                        const isSidebar = !!(SidebarComponent || ModuleSidebar)
                        const isBreadcrumbs = !!(BreadcrumbsComponent || ModuleBreadcrumbs)
                        //console.log("noTopBrd---", topBreadcrumbs, v.sidebarWithBreadcrumbs, module.slug, path, isBreadcrumbs)

                        return <Route key={key} path={url} element={<React.Suspense fallback={<InitLoader/>}>
                            {
                                HelloBarComponent &&
                                  <div className={"hello-bar"}>
                                    <HelloBarComponent/>
                                  </div>
                            }
                            <div className={`primary-layout__context modules__${module.moduleName}`}>

                                {isSidebar && <MainSidebar>
                                    <div className={"sidebar__primary-context"}>
                                        {SidebarComponent && <SidebarComponent/>}
                                        {!SidebarComponent && ModuleSidebar && <ModuleSidebar/>}
                                    </div>
                                </MainSidebar>}

                                <div id={"main__routes__wrapper"} className={classNames('routes-content__wrapper', {
                                    "with__sidebar": isSidebar,
                                    //"sidebar__is_opened": sidebarIsOpened,
                                })}>
                                    <React.Suspense fallback={<InitLoader/>}>

                                        {isBreadcrumbs && <MainBreadcrumbs>
                                            { BreadcrumbsComponent && <BreadcrumbsComponent title={v.breadcrumbTitle || ''}/>}
                                            { !BreadcrumbsComponent && ModuleBreadcrumbs && <ModuleBreadcrumbs title={v.breadcrumbTitle || ''}/>}
                                        </MainBreadcrumbs>}



                                        <div className={"main__playground__context"}>
                                            <ElementComponent path={url} query={query} navigate={navigate} callback={() => {
                                                console.log("ElementComponent")
                                            }}/>
                                        </div>

                                    </React.Suspense>
                                </div>
                            </div>
                        </React.Suspense>}/>
                    })
                })
            })}

            {!defaultNav && <>
                <Route path={"/404"} element={<NotFound/>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
            </> }

            {siteNav && <Route path="/dashboard" element={<Navigate to="/dashboard"/>}/>}
            {defaultNav && <Route path="*" element={<Navigate to="/dashboard"/>}/>}

        </Routes>

    </React.Suspense>
})
AppRoutesHelper.displayName = "AppRoutesHelper"
export default AppRoutesHelper

