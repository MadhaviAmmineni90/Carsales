"use strict";
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var VehicleTypeService = (function () {
    function VehicleTypeService(_http) {
        this._http = _http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    VehicleTypeService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    VehicleTypeService.prototype.postCars = function (url, model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post("http://localhost:60367/Api/VehicleType", body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    return VehicleTypeService;
}());
exports.VehicleTypeService = VehicleTypeService;
//# sourceMappingURL=VehicleType.service.js.map