import { Injectable, InjectionToken, Injector } from '@angular/core';
import studentsData from '../assets/data.json';

export const CFG_PATH = new InjectionToken<string>(
  'CFG_PATH'
);

@Injectable()
export class ConfigService {

  constructor(
    private injector: Injector,
  ) {}

  get message(): string {
    return 'Hello World from my lib service!';
  }

  public studentsData(): any[] {
    const configPath = this.injector.get<string>(CFG_PATH);
    console.log('configPath', configPath);
    return studentsData;
  }
}
