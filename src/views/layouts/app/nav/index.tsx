 import * as React from "react";
import {Link} from "react-router-dom";
import {NavLoader} from "views/layouts/app/nav/nav-loader";

const MainNavMenu = function (props: any) {
    return (<React.Suspense fallback={<NavLoader/>}>
        <div className={"nav-layout__context"}>

            <div className={"main-nav-menu__context"}>
                <div className={"sidebar__nav-item"}>
                    <div className={"site__logo"}>
                        <Link to={"/dashboard"}>
                            LG
                        </Link>
                    </div>
                    <ul className={"sidebar__nav-item__list-items"}>

                        <li title={"Home"}>
                            <Link to={"/dashboard"}>Hm</Link>
                        </li>

                    </ul>

                </div>
                <div className={"sidebar__nav-footer"}>
                    PV
                </div>
            </div>
        </div>
    </React.Suspense>)
}

export default MainNavMenu