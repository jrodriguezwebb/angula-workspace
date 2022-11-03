import { CFG_PATH, ConfigService } from './config.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
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
    configPath: string = 'defaultValue'
  ): ModuleWithProviders<ToolsModule> {
    return {
      ngModule: ToolsModule,
      providers: [
        ConfigService,
        {
          provide: CFG_PATH,
          useValue: configPath,
        }
      ],
    };
  }
}
