import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <div class="row">
    <h1 Style=margin-left:10px;>Nutanix - TechScan</h1>
  </div>
   <div>
     <nav>
     <a class="mdl-navigation__link" [routerLink]="['/']">Home</a>
    </nav>
    <hr>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
})

// App Component class
export class AppComponent{
}
