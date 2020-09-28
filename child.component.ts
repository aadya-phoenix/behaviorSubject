import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
msg:string;
  constructor(private commonService: CommonService ) { 
    this.msg = '';
  }

  ngOnInit() {
    this.commonService.getBS().subscribe(data=>{
    this.msg= data;
    },err=>{

    },()=>{

    })

    
  }

}
