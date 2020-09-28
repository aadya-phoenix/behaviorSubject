import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject } from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class CommonService {
private bs:BehaviorSubject<string> = new BehaviorSubject <string>('');

constructor() { }
public getBS():BehaviorSubject<string>{
  return this.bs;
 }

}
