"use strict";
var router_1 = require("@angular/router");
var home_routes_1 = require("./home/home.routes");
var detail_routes_1 = require("./detail/detail.routes");
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
].concat(home_routes_1.homeRoutes, detail_routes_1.detailRoutes);
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map