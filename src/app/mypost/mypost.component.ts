import {Component,OnInit,OnChanges,ViewEncapsulation,ContentChild,AfterContentInit,OnDestroy,AfterContentChecked,DoCheck,Input, AfterContentInit, ChangeDetectionStrategy} from '@angular/core'
@Component({
  changeDetection:ChangeDetectionStrategy.OnPush,
  selector:'app-post',
  templateUrl:'./post.component.html',
  styleUrls:['./post.component.scss'],
  encapsulation:ViewEncapsulation.None
}) export class PostComponent implements OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit, OnChanges, OnInit{
  @Input() post:Post
  @ContentChild('info',{static:true}) infoRef:ElementRef
  ngOnInit(){

  }
  ngOnDestroy(){


  }
  ngAfterViewChecked(){


  }
  ngAfterViewInit(){


  }
  ngOnChanges(changes:SimpleChanges){


  }
  AfterContentChecked(){


  }
  ngAfterContentInit(){


  }
  ngDoCheck(){

  }
  @Output() onRemove=new EventEmitter<number>()
  removePost(){
    this.onRemove.emit(this.post.id)
  }
}
