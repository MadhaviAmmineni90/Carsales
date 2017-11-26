import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { carscomponent } from './Vehicles/Vehicles.component';
import { carsCreateComponent } from './Vehicles/VehicleCreate.component';
import { bikesCreateComponent } from './Vehicles/CreateBike.component';
import { vehicleTypeCreateComponent } from './VehicleTpes/VehicleType.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
    declarations: [AppComponent, carscomponent, bikesCreateComponent, carsCreateComponent, vehicleTypeCreateComponent],
    bootstrap: [AppComponent, carscomponent, carsCreateComponent, bikesCreateComponent, vehicleTypeCreateComponent]
})
export class AppModule { }
