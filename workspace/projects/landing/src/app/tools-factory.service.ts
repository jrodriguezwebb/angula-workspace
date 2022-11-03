import { Injectable } from '@angular/core';
import { ToolsFactoryInterface } from 'dist/tools';

@Injectable()
export class ToolsFactoryService implements ToolsFactoryInterface {
  sayHelloTo(name: string): string {
    return `Hello!! ${ name }`;
  }
}
