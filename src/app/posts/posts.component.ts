import {Component} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {PostsService} from '../posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  showIds=false
  constructor(private router:Router,private postsService: PostsService, route:ActivatedRoute) {}
  ngOnInit(){
    this.route.queryParams.subscribe((params:Params)=>{
      this.showIds=!!params.showIds
    })
    this.router.fragment.subscribe(fragment=>{

    })
  }
  showIdsProgram(){
    this.router.navigate(['/posts'],{
      queryParams:{
        showIds:true
      },
      fragment:"program-fragment"
    })
  }
}
