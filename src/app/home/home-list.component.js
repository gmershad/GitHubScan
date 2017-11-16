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
var nutanix_service_1 = require("../dataservices/nutanix.service");
var router_1 = require("@angular/router");
var HomeListComponent = (function () {
    function HomeListComponent(nutanixervice, router) {
        this.nutanixervice = nutanixervice;
        this.router = router;
        this.ValueId = 1;
        this.technologies = [
            { id: 1, name: "java" },
            { id: 2, name: "python" },
            { id: 3, name: "javaScript" },
            { id: 4, name: "php" },
            { id: 5, name: "ruby" }
        ];
        this.curPage = 1;
        this.pageSize = 10;
    }
    HomeListComponent.prototype.ngOnInit = function () {
        this.getNutanixRepo();
    };
    HomeListComponent.prototype.currentPageClick = function () {
        this.curPage = this.curPage + 1;
        this.getNutanixRepo();
    };
    HomeListComponent.prototype.prevPageClick = function () {
        this.curPage = this.curPage - 1;
        this.getNutanixRepo();
    };
    HomeListComponent.prototype.getNutanixRepo = function () {
        var _this = this;
        this.nutanixervice.getNutanixGitHubData(this.selectedName, String(this.curPage)).subscribe(function (data) {
            _this.nutaNixGitHubData = data.items;
            console.log(_this.nutaNixGitHubData);
        });
    };
    HomeListComponent.prototype.numberOfPages = function () {
        return 10;
    };
    ;
    HomeListComponent.prototype.selectedValueObj = function (id) {
        this.ValueId = (id.srcElement || id.target).value;
        for (var i = 0; i < this.technologies.length; i++) {
            if (this.technologies[i].id == this.ValueId) {
                this.selectedObj = this.technologies[i];
                this.selectedName = this.selectedObj.name;
                this.getNutanixRepo();
            }
        }
    };
    HomeListComponent.prototype.showDetails = function (id) {
        console.log(id);
        this.router.navigate(['/detail', { 'id': id }]);
    };
    ;
    return HomeListComponent;
}());
HomeListComponent = __decorate([
    core_1.Component({
        templateUrl: './app/home/home.html'
    }),
    __metadata("design:paramtypes", [nutanix_service_1.NutanixService, router_1.Router])
], HomeListComponent);
exports.HomeListComponent = HomeListComponent;
//# sourceMappingURL=home-list.component.js.map