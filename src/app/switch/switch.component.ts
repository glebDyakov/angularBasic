import { Component, OnInit,Provider,forwardRef,ControlValueAccessor } from '@angular/core';
const VALUE_ACCESSOR:Provider={
  provide:NG_VALUE_ACCESSOR,
  useExisting:,forwardRef(()=>SwitchComponent),
  multi:true
}
@Component({
  providers:[VALUE_ACCESSOR],
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements ControlValueAccessor,OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  state="off"
  private onChange=(value:any)=>{}
  setState(state:string){
    this.state=state
    this.onChange(this.state)
  }
  registerOnChange(fn:any):void{
    this.onChange=fn
  }
  registerOnChange(fn:any):void{

  }
  registerOnChange(fn:any):void{

  }
  writeValue(fn:string):void{
    this.state=state
  }
}
