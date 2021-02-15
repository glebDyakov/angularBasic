import {NgModule} from '@angular/core'
import {Routes,Router<odule} from '@angular/router'
const routes:Routes=[

  {path:'',component:HomePageComponent,pathMatch:'full'},
  // {path:'',component:HomePageComponent,pathMatch:'full',loadChildren:'./about-page/about-page.module#AboutPageModule'},
  {path:'',component:HomePageComponent,pathMatch:'full',loadChildren:()=>import('./about-page/about-page.module').then(m=>m.AboutPageModule)},
  // {path:'',component:HomeComponent},
  // {path:'about',component:AboutComponent, children:[
  //   {path:'extra',component:AboutExtraComponent}
  // ]},
  // {path:'posts',component:PostsComponent,resolve:{post:PostResolver}, canActivate:[AuthGuard],canActivate:[AuthGuard]},
  // {path:'posts/:id',component:PostComponent},
  // {path:'error',component:ErrorPageComponent},
  // {path:'**',redirectTo:'/error'}
]
@NgModule({
  imports:[RouterModule.forRoot(routes,{
    preloadStrategy:PreloadAllModules
  })],
  exports:[RouterModule],
})
export class AppRoutingModule{

}
