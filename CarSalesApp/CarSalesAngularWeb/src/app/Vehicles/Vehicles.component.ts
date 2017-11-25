import { Component, OnInit } from '@angular/core';
import { ICars, IBikes } from './Vehicles';
import { VehicleService } from './Vehicles.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'list-cars',
    templateUrl: 'app/Vehicles/Vehicles.component.html',
    providers: [VehicleService]
})

@Component({
    selector: 'list-bikes',
    templateUrl: 'app/Vehicles/Bike.component.html',
    providers: [VehicleService]
})

export class carscomponent implements OnInit {
    cars: ICars[];
    bikes: IBikes[];
    constructor(private _Carservice: VehicleService) {
    }

    ngOnInit() {
        this._Carservice.getCars().subscribe((carsData) => this.cars = carsData);
        this._Carservice.getBikes().subscribe((bikesData) => this.bikes = bikesData);
    }

}


