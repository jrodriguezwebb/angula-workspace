import { CFG_PATH, ConfigService } from './config.service';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
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
