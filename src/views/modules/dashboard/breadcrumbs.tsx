import * as React from "react"
import {BreadcrumbsListItem, BreadcrumbsWrapper} from "views/layouts/app/breadcrumbs";
import {Link} from "react-router-dom";
import "./_style.scss";

export default function DashboardBreadcrumbs(props: any) {
    return <React.Fragment>
        <BreadcrumbsWrapper>
            <BreadcrumbsListItem><Link to={"/dashboard"}>Dashboard</Link></BreadcrumbsListItem>
        </BreadcrumbsWrapper>
    </React.Fragment>
}

