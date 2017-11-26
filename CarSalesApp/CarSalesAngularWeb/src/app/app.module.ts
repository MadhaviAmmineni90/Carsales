import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { carscomponent } from './Vehicles/Vehicles.component';
import { carsCreateComponent } from './Vehicles/VehicleCreate.component';
import { bikesCreateComponent } from './Vehicles/CreateBike.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
    declarations: [AppComponent, carscomponent, bikesCreateComponent, carsCreateComponent],
    bootstrap: [AppComponent, carscomponent, carsCreateComponent, bikesCreateComponent]
})
export class AppModule { }
