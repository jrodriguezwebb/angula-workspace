import { Component, Inject } from '@angular/core';
import { ConfigService, ToolsFactoryInterface, TOOLS_FACTORY } from 'dist/tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  constructor(
    private readonly configService: ConfigService,
    @Inject(TOOLS_FACTORY)
    private readonly toolsFactoryService: ToolsFactoryInterface,
  ) {
    this.title = this.configService.message;
    const greetings = this.toolsFactoryService.sayHelloTo('Jesus');
    console.log(greetings);
    const studentData = this.configService.studentsData();
    console.log(studentData);
  }
}
