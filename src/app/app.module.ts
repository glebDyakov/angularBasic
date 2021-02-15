import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { PostComponent } from './post.component';

import { AppComponent } from './app.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';
import { Post4Component } from './post3/post4.component';
import { PostFormComponent } from './post-form/post-form.component';
import { Style2Directive } from './style2.directive';
import { IfnotDirective } from './directives/ifnot.directive';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CounterComponent } from './counter/counter.component';
import { SwitchComponent } from './switch/switch.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ModalComponent } from './modal/modal.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { Post4Component } from './post3/post.component';



const INTERCEPTOR_PROVIDER:Provider={
  provide:HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true
}
@NgModule({
  declarations: [
    MultByPipe,
    Directive,
    AppComponent,
    PostComponent,
    Post2Component,
    Post4Component,
    Post3Component,
    PostFormComponent,
    Style2Directive,
    IfnotDirective,
    ExMarksPipe,
    FilterPipe,
    CounterComponent,
    ReactiveFormsModule,
    SwitchComponent,
    ErrorPageComponent,
    ModalComponent,
    RefDirective
  ],
  entryComponents:[
    ModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // AboutPageModule
  ],
  providers: [
    INTERCEPTOR_PROVIDER,
    AppCounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
