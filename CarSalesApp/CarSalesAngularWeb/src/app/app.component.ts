import { Component } from '@angular/core';



@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>
             <div class="container"> <list-cars></list-cars></div>
<div class="container"> <Create-VehicleTypes></Create-VehicleTypes></div>
<div class="container"> <list-bikes></list-bikes></div>
<
`

})
export class AppComponent { name = 'welcome Vehciles'; }
