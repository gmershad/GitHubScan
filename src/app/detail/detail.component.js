"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nutanix_service_1 = require("../dataservices/nutanix.service");
var DetailComponent = (function () {
    function DetailComponent(route, nutanixervice) {
        this.route = route;
        this.nutanixervice = nutanixervice;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.selectRepoOwner = params['id'];
            _this.getNutOwneranixRepo();
            _this.getGitOwnerFollowers();
        });
    };
    DetailComponent.prototype.getNutOwneranixRepo = function () {
        var _this = this;
        this.nutanixervice.getNutanixGitHubOwnerData(this.selectRepoOwner).subscribe(function (data) {
            _this.nutaNixOwnerData = data.items[0];
            console.log(_this.nutaNixOwnerData);
        });
    };
    DetailComponent.prototype.getGitOwnerFollowers = function () {
        var _this = this;
        this.nutanixervice.getGitHubOwnerFollowers(this.selectRepoOwner).subscribe(function (data) {
            _this.gitHubOwnerFollowers = data;
            console.log(_this.gitHubOwnerFollowers);
        });
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    core_1.Component({
        templateUrl: './app/detail/repodetail.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, nutanix_service_1.NutanixService])
], DetailComponent);
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map