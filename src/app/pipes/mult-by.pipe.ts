@Pipe({
  name:'mult'
}) export class MultByPipe implements PipeTransform{
  transform(value:number,pow:number):number{
    return value * pow
  }

}
