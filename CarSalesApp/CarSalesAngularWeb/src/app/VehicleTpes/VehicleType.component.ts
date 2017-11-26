import { Component, OnInit } from '@angular/core';
import { IVehicleTypes } from './VehicleType';
import { VehicleTypeService } from './VehicleType.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'Create-VehicleTypes',
    templateUrl: 'app/VehicleTypes/VehicleType.component.html',
    providers: [VehicleTypeService]
})


export class vehicleTypeCreateComponent {
    vehicleTypes: IVehicleTypes;


    AddVehicleTypeForm: FormGroup;
    title: string = "AddVehicleType";
    constructor(private _fb: FormBuilder) {
        this.AddVehicleTypeForm = this._fb.group({
            VehicleType: '',
        })
    }
    ngOnInit() {

    }
}