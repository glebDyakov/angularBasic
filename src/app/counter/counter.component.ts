import { Component, OnInit } from '@angular/core';

@Component({
  providers:[],
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  // constructor(appCounterService:AppCounterService) { }
  constructor(private appCounterService:AppCounterService,private localCounterService:LocalCounterService){

  }


}
