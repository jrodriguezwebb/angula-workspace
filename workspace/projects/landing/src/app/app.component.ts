import { Component } from '@angular/core';
import { HelloWorldConfigService } from 'dist/tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  constructor(helloWorld: HelloWorldConfigService) {
    this.title = helloWorld.message;
    console.log(helloWorld.studentsData());
  }
}
