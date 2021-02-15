import { ElementRef,Component, OnInit,,ViewChildEventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @ViewChild('titleInput',{static:false}) inputRef:ElementRef
  @Output() onAdd:EventEmitter<Post>=new EventEmitter<Post>()
  title=''
  text=''
  constructor() { }

  ngOnInit(): void {
  }
  focusTitle(){
    this.inputRef.nativeElement.focus()
  }
  addPost(){
    if(this.text.trim() && this.title.trim()){
      const post:Post={
        title:this.title,
        text:this.text,
      }
      this.onAdd.emit(post)
      this.text=this.title=''
    }
  }

}
