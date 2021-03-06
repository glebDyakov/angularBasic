import {Component} from '@angular/core'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post:Post
  constructor(private route:ActivatedRoute,private router:Router,private postsService:PostsService){

  }
  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      // this.post=this.route.snapshot.data.post
      this.route.data.subscribe(data=>{
        this.post=data.post
      })
      // this.post=this.postsService.getById(+params.id)
    })
  }
  loadPost(){
    this.router.navigate(['/posts',44])
  }
}
