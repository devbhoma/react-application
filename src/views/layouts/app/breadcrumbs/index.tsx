import * as React from "react";

const MainBreadcrumbs = function (props: any) {

    return (<div className={"main-breadcrumbs__context"}>
        {props.children ? props.children : <BreadcrumbsWrapper>
            <BreadcrumbsListItem>Default</BreadcrumbsListItem>
            <BreadcrumbsListItem classname={"active"}>List</BreadcrumbsListItem>
        </BreadcrumbsWrapper>}

    </div>)

}

export default MainBreadcrumbs

export const BreadcrumbsWrapper = React.memo(function (props) {
    return <ul className={"breadcrumbs__list-items"}>{props.children}</ul>
})

interface BreadcrumbsListItemProps {
    classname?: string | ""
    children: any
}

export const BreadcrumbsListItem = React.memo(function (props: BreadcrumbsListItemProps) {
    return <li className={props.classname}>{props.children}</li>
})