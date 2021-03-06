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
var forms_1 = require("@angular/forms");
var carsCreateComponent = (function () {
    function carsCreateComponent(_fb) {
        this._fb = _fb;
        this.title = "AddCar";
        this.AddCarsForm = this._fb.group({
            Make: '',
            Model: ['', [forms_1.Validators.required]],
            Engine: '',
            Doors: ['', [forms_1.Validators.required]],
            Wheels: ['', [forms_1.Validators.pattern("[1-9][0-9]{9}")]],
            CarType: '',
        });
    }
    carsCreateComponent.prototype.ngOnInit = function () {
    };
    return carsCreateComponent;
}());
carsCreateComponent = __decorate([
    core_1.Component({
        selector: 'list-cars',
        templateUrl: 'app/Vehicles/VehicleCreate.component.html',
        providers: [Vehicles_service_1.VehicleService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], carsCreateComponent);
exports.carsCreateComponent = carsCreateComponent;
//# sourceMappingURL=VehicleCreate.component.js.map