import { Component } from '@angular/core';

@Component({
  selector: 'my-app', //root app component. could be pm-root
  template: `
    <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
  `
})

export class AppComponent {
  pageTitle: string
}

// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello {{name}}</h1>`,
// })
// export class AppComponent  { name = 'Angular'; }
