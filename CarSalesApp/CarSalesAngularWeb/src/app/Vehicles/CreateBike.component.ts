import { Component, OnInit } from '@angular/core';
import { IBikes } from './Vehicles';
import { VehicleService } from './Vehicles.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'list-cars',
    templateUrl: 'app/Vehicles/VehicleCreate.component.html',
    providers: [VehicleService]
})

    ///BikesComponent
export class bikesCreateComponent {
    bikes: IBikes;

    AddBikesForm: FormGroup;
    title: string = "AddBike";
    constructor(private _fb: FormBuilder) {
        this.AddBikesForm = this._fb.group({
            Make: '',
            Model: ['', [Validators.required]],
            Engine: '',
            Wheels: ['', [Validators.pattern("[1-9][0-9]{9}")]],
            BikeType: '',
        })
    }

    ngOnInit() {

    }
}