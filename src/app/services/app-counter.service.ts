import {Injectable} from '@angular/core'
@Injectable({
  providedIn:'root'
}) export class AppCounterService{
  counter=0
  constructor(private logService:LogService){

  }
  increase(){
    this.logService.log('increate')
    this.counter++
  }
  decrease(){
    this.logService.log('decreate')
    this.counter--
  }
}
