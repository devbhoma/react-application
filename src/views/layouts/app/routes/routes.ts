import Dashboard from "views/modules/dashboard/routes";
import GuidelinesRoutes from "views/modules/guidelines/routes";
import {PatternsOfRoutes} from "views/layouts/app/routes/helper";

// import * as fs from "fs";
// const folders = fs.readdirSync("views/modules")
// for (const fldr of folders) {
//     console.log("fldr----",fldr)
// }
// @ts-ignore
// require(['views/modules/dashboard/routes'], _routes => {
//     console.log("_routes---", _routes)
//     _routes.default()
// })


const AppRoutes: PatternsOfRoutes[] = [
    Dashboard,
    GuidelinesRoutes,
]
export default AppRoutes