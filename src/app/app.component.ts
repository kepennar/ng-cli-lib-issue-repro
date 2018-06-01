import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div style="text-align:center">
      <h1>
        Welcome to {{ title }}!
      </h1>
    </div>
    <lib-comp1></lib-comp1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Repro app';
}
