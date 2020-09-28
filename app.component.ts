import { Component } from '@angular/core';
import  { BehaviorSubject } from 'rxjs';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive';

  constructor(private commonService:CommonService){}


   sendData(event){
     let bs:BehaviorSubject<string> = this.commonService.getBS();
     bs.next(event.target.value);
   }

}
