import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[AboutPageComponent,AboutExtraPageComponent],
  imports:[SharedModule,CommonModule,RouterModule.forChild([
    {path:'about',component:AboutPageComponent ,children:[
      {path:'extra',component:AboutExtraPageComponent}
    ]}
  ])],exports:[RouterModule]
})
export class AboutPageModule{

}
