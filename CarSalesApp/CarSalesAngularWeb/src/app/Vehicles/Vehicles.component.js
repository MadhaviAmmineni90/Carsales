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
var Vehicles_service_1 = require("./Vehicles.service");
var carscomponent = (function () {
    function carscomponent(_Carservice) {
        this._Carservice = _Carservice;
        this.addCarstable = false;
        this.CarId = "0";
        this.Make = "";
        this.Model = "";
        this.Engine = "";
        this.Doors = "";
        this.wheels = "";
        this.cartype = "";
        this.BikeType = "";
    }
    carscomponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Carservice.getCars().subscribe(function (carsData) { return _this.cars = carsData; });
        this._Carservice.getBikes().subscribe(function (bikesData) { return _this.bikes = bikesData; });
    };
    carscomponent.prototype.AddCars = function () {
        this.CarId = "0";
        this.Make = "";
        this.Model = "";
        this.Engine = "";
        this.Doors = "";
        this.wheels = "";
        this.cartype = "";
    };
    return carscomponent;
}());
carscomponent = __decorate([
    core_1.Component({
        selector: 'list-cars',
        templateUrl: 'app/Vehicles/Vehicles.component.html',
        providers: [Vehicles_service_1.VehicleService]
    }),
    core_1.Component({
        selector: 'list-bikes',
        templateUrl: 'app/Vehicles/Vehicles.component.html',
        providers: [Vehicles_service_1.VehicleService]
    }),
    __metadata("design:paramtypes", [Vehicles_service_1.VehicleService])
], carscomponent);
exports.carscomponent = carscomponent;
//# sourceMappingURL=Vehicles.component.js.map