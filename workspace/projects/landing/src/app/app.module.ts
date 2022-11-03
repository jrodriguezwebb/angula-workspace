import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolsModule } from 'dist/tools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolsModule.forRoot('test'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
