import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
              <list-cars></list-cars>
`

})
export class AppComponent  { name = 'welcome Cars'; }
