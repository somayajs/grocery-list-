import { Component } from '@angular/core';
 @Component({
    selector: 'app-root',
    template: `
      <div>
        <h1> {{pageTitle}} </h1>
        <div>My First Component</div>
      </div>
    `
 })
 export class AppComponent {
  pageTitle: string ="My Grocery List Mnager";
 }



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Web 304: Angular';
// }
