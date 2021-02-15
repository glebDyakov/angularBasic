@Directive({
  selector:'[appRef]'
}) export class RefDirective{
  constructor(public containerRef:ViewContainerRef){

  }
}
