import * as React from "react";
import classNames from "classnames";
import EventEmitter from "core/utils/events";
import {useState} from "react";

const MainSidebar = function (props: any) {
    const [isOpen, toggle] = useState(false)
    return (<React.Fragment>
        <button className={classNames("sidebar__toggle-action", {
            "is__collapse": !isOpen
        })} onClick={() => {
            EventEmitter.dispatch("sidebar_toggle__action", !isOpen)
            toggle(!isOpen)
        }}>-</button>

        <div className={classNames("main-sidebar__context", {
            "is__open": isOpen,
        })}>
            <div className={"sidebar-inner__context"}>
                {props.children}
            </div>
        </div>
    </React.Fragment>)
}
export default MainSidebar