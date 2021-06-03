import { Component } from "@angular/core";

@Component({
  selector: 'not-found',
  template: `
   <div>
     Page not Found, <a routerLink="/">go home</a>
   </div>.
  `
})
export class NotFoundComponent {

}
