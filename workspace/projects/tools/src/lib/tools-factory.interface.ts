import { InjectionToken } from '@angular/core';

export interface ToolsFactoryInterface {
  sayHelloTo(name: string): string;
}
export const TOOLS_FACTORY = new InjectionToken<ToolsFactoryInterface>('TOOLS_FACTORY');
