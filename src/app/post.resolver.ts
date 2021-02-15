import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn:'root'
}) export class PostResolver implements Resolve<Post>{
  constructor(private postsService:PostsService){

  }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Post> | Promise<Post> | Post{
    return of(this.postsService.getById(+route.params['id'])).pipe(delay(1500))
  }
}
