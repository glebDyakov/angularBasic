import {HostBinding,Directive,ElementRef,Input,Renderer2,HostListener} from '@angular/core'
@Directive({
  selector:'[appStyle]'
}) export class StyleDirective{
  @Input('appStyle') color:string='blue'
  @Input() fontWeight='normal'
  @Input() dStyles:{border?:string,fontWeight?:string,boredrRadius?:string}
  @HostBinding('style.color') elColor=null
  constructor(private el:ElementRef,private render:Renderer2){
    this.r.setStyle(el.nativeElement, 'color','blue')
    // el.nativeElement.style.color="red"
  }
  @HostListener('click',['$event.target']) onClick(event:Event){

  }
  @HostListener('mouseenter') onEnter(){
    this.elColor=this.color
    this.r.setStyle(el.nativeElement, 'color',this.color)
    this.r.setStyle(el.nativeElement, 'fontWeight',this.fontWeight)
    this.r.setStyle(el.nativeElement, 'fontWeight',this.dStyles.fontWeight)
    this.r.setStyle(el.nativeElement, 'border',this.dStyles.border)
    this.r.setStyle(el.nativeElement, 'borderRadius',this.dStyles.boredrRadius)
  }
  @HostListener('mouseleave') onLeave(){
    this.elColor=null
    this.r.setStyle(el.nativeElement, 'color',null)
    this.r.setStyle(el.nativeElement, 'fontWeight',null)
    this.r.setStyle(el.nativeElement, 'fontWeight',null)
    this.r.setStyle(el.nativeElement, 'border',null)
    this.r.setStyle(el.nativeElement, 'borderRadius',null)
  }
}
