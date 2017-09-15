import { Component } from '@angular/core';

@Component({
  selector: 'my-app', //root app component. could be pm-root
  template: `
    <div>
      <nav class='navbar navbar-default'>
        <div class='container-fluid'>
          <a class='navbar-brand'>{{pageTitle}}</a>
          <ul class='nav navbar-nav'>
            <li><a [routerLink]="['/welcome']">Home</a></li>
            <li><a [routerLink]="['/products']">Product List</a><li>
          </ul>
        </div>
      </nav>
      <div class='container'>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  // <div><h1>{{pageTitle}}</h1>
  //   <pm-products></pm-products>
  // </div>
  // ^what was done pre-routing
})

export class AppComponent {
  pageTitle: string
}
