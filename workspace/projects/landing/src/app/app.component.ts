import { Component } from '@angular/core';
import { HelloWorldService } from 'dist/tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  constructor(helloWorld: HelloWorldService) {
    this.title = helloWorld.message;
    console.log(helloWorld.studentsData());
  }
}
