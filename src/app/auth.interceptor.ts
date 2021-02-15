export class AuthInterceptor implements HttpInterceptor{
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    const cloned=req.clone({
      headers:req.headers.append('Auth',"SOME_RANDOM_TOKEN")
    }).pipe(tap(event=>{
      if(event.type===HttpEvent.Type.Response){

      }
    }))

    return next.handle(cloned)
  }
}
