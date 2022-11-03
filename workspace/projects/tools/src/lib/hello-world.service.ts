import { Injectable } from '@angular/core';
import studentsData from '../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  get message(): string {
    return 'Hello World from my lib service!';
  }

  public studentsData(): any[] {
    return studentsData;
  }
}
