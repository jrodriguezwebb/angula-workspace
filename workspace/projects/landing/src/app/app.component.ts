import { Component } from '@angular/core';
import { ConfigService } from 'dist/tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  constructor(configService: ConfigService) {
    this.title = configService.message;
    console.log(configService.studentsData());
  }
}
