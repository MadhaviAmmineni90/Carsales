import { Component, OnInit } from '@angular/core';
import { ICars } from './cars';
import { CarService } from './cars.service';

@Component({
    selector: 'list-cars',
    templateUrl: 'app/Cars/cars.component.html',
    providers: [CarService]
})

export class carscomponent implements OnInit {
    cars: ICars[];
    constructor(private _Carservice: CarService) {

    }

    ngOnInit() {
        this._Carservice.getCars().subscribe((carsData) => this.cars = carsData);
    }
}
