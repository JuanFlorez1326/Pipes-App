import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'angular';
  value: number = 1000;
  obj: any = { 
    name: 'TypeScript', 
    value: 2000 
  };

  seeName() {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }
}