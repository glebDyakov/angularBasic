import { ColorDirective } from './color.directive';

@NgModule({
  declarations:[PageNamePipe,ColorDirective],
  imports:[],
  exports:[ColorDirective,PageNamePipe]
})
export class SharedModule{

}
