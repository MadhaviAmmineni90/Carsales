import { Component, OnInit } from '@angular/core';
import { ICars, IBikes } from './Vehicles';
import { VehicleService } from './Vehicles.service';

@Component({
    selector: 'list-cars',
    templateUrl: 'app/Vehicles/Vehicles.component.html',
    providers: [VehicleService]
})

@Component({
    selector: 'list-bikes',
    templateUrl: 'app/Vehicles/Vehicles.component.html',
    providers: [VehicleService]
})

export class carscomponent implements OnInit {
    cars: ICars[];
    bikes: IBikes[];
    addCarstable: boolean = false;

    public CarId = "0";
    public Make = "";
    public Model = "";
    public Engine = "";
    public Doors = "";
    public wheels = "";
    public cartype = "";
    public BikeType = "";

    constructor(private _Carservice: VehicleService) {
    }

    ngOnInit() {
        this._Carservice.getCars().subscribe((carsData) => this.cars = carsData);
        this._Carservice.getBikes().subscribe((bikesData) => this.bikes = bikesData);
    }

    AddCars() {
        this.CarId = "0";
        this.Make = "";
        this.Model = "";
        this.Engine = "";
        this.Doors = "";
        this.wheels = "";
        this.cartype = "";
    }

   
}


