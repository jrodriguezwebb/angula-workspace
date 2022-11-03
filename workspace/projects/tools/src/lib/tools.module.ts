import { ModuleWithProviders, NgModule } from '@angular/core';
import { CFG_PATH, HelloWorldConfigService } from './hello-world-config.service';
import { ToolsComponent } from './tools.component';

@NgModule({
  declarations: [
    ToolsComponent
  ],
  imports: [
  ],
  exports: [
    ToolsComponent
  ],
})
export class ToolsModule {
  /**
   * Params tools module
   * @param config
   * @returns root
   */
  public static forRoot(
    config: string
  ): ModuleWithProviders<ToolsModule> {
    return {
      ngModule: ToolsModule,
      providers: [
        HelloWorldConfigService,
        {
          provide: CFG_PATH,
          useValue: 'prueba',
        }
        /* {
          provide: APP_INITIALIZER,
          useFactory: initializer,
          deps: [HelloWorldService],
          multi: true,
        } */,
      ],
    };
  }
}
