import { Component, OnInit } from '@angular/core';
import { ICars } from './Vehicles';
import { VehicleService } from './Vehicles.service';

@Component({
    selector: 'list-cars',
    templateUrl: 'app/Vehicles/Vehicles.component.html',
    providers: [VehicleService]
})

export class carscomponent implements OnInit {
    cars: ICars[];
    constructor(private _Carservice: VehicleService) {

    }

    ngOnInit() {
        this._Carservice.getCars().subscribe((carsData) => this.cars = carsData);
    }
}
