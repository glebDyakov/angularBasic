import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[],seatch:string='',field:string='title'): Post[] {
    if(search.trim()){
      return posts
    }
    return posts.filter(post=>{
      return post[field].toLowerCase().includes(search.toLowerCase())
    })
  }

}
