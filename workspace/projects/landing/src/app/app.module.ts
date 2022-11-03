import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToolsModule, TOOLS_FACTORY } from 'dist/tools';
import { ToolsFactoryService } from './tools-factory.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolsModule.forRoot('test'),
  ],
  providers: [
    {
      provide: TOOLS_FACTORY,
      useClass: ToolsFactoryService,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
