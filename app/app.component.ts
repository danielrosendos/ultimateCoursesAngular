import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick()">
        Change Name
      </button>
      <input
        type="text"
        [value]="name"
        (input)="handleIput($event)"
        (blur)="handleBlur($event)"
      >
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Todd';
  handleBlur(event: any) {
    this.name = event.target.value;
  }
  handleIput(event: any) {
    this.name = event.target.value;
  }
  handleClick() {
    this.name = 'Motto';
  }
}
