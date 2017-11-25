import { Component, OnInit } from '@angular/core';
import { ICars } from './Vehicles';
import { VehicleService } from './Vehicles.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'list-cars',
    templateUrl: 'app/Vehicles/VehicleCreate.component.html',
    providers: [VehicleService]
})

    ///Cars Component
export class carsCreateComponent {
    cars: ICars;


    AddCarsForm: FormGroup;
    title: string = "AddCar";
    constructor(private _fb: FormBuilder) {
        this.AddCarsForm = this._fb.group({
            Make: '',
            Model: ['', [Validators.required]],
            Engine: '',
            Doors: ['', [Validators.required]],
            Wheels: ['', [Validators.pattern("[1-9][0-9]{9}")]],
            CarType: '',
        })
    }
    ngOnInit() {

    }
}