import { OnInit,Component } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import { Observable } from 'rxjs';


// export interface Post{
//   title:string
//   text:string
//   id?:string
// }
export interface Post{
  title:string
  text:string

}

@Component({

  providers:LocalCounterService,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  // updatePosts(post:Post){
  //   this.posts.unshift(post)
  // }
  // ngOnInit(){
  //   setTimeout(()=>{
      // this.posts[0].title="Changed"
  //     this.posts[0]={
  //       title:'change',
  //       text:'asdsad',
  //       id:4
  //     }
  //   },5000)
  // }
  // removePost(id:number){
  //   this.posts=this.posts.filter(p=>p.id!==id)
  // }
  // posts:Post[]=[
  //   {
  //     title:"хочу выучить angular компоненты",
  //     text:"я все ещё учу компоненты",
  //     id:1,
  //   },
  //   {
  //     title:"следуюий блок",
  //     text:"будет про директивы и пайпы",
  //     id:1,
  //   },
  // ]
  // onInput(event:KeyboardEvent){
  //   this.inputValue=(<HTMLInputElement>event.target).value
  // }
  // onInput(event:any){
  //     this.title=(<HTMLInputElement>event.target).value
  //   }
  // onCLick(){

  // }
  // onBlur(str:string){
  //   this.inputValue=str
  // }
  // constructor(private appCounterService:AppCounterService,private localCounterService:LocalCounterService){

    // setTimeout(()=>{
    //   this.img=""
    // },5000)
  // }
  // title='Dynamic title'
  // number=42
  // arr=[1,2,3]
  // obj={
  //   a:1,b:{c:2}
  // }
  // inputValue=''
  // img=''
  // title='initilal'
  // backgroundToggle=false
  // toggle=false
  // arr=[1,1,2,3,5,8]
  // objs=[
  //   {title:'post 1',authod:'vladilen',comments:[
  //     {name:'max',text:'lorem1'},
  //     {name:'max',text:'lorem2'},
  //     {name:'max',text:'lorem3'},
  //   ],
  //   [{title:'post 2',author:'vladilen2',
  //     {name:'max2',text:'lorem1'},
  //     {name:'max2',text:'lorem2'},
  //     {name:'max2',text:'lorem3'},
  //   ]
  // }
  // ]
  // now:Date=new Date()
  // isVisible=true
  // e:number=Math.E
  // str="hello world"
  // date:Date=new Date()
  // float=0.42
  // searchField=''
  // obj={
  //   a:1,
  //   b:{
  //     c:2,
  //     d:{
  //       e:3,
  //       f:4
  //     }
  //   }
  // }
  // search=''
  // posts:Post[]=[
  //   {title:'beer',text:'самое лучшее пиво в мире'},
  //   {title:'bread',text:'the best bread in the world'},
  //   {title:'javascript',text:'the best language'},
  // ]
  // addPost(){
  //   this.posts.unshift({
  //     title:'angular 8',
  //     text:'vladilen angular 8 course'
  //   })
  // }
  // p:Promise<string>=new Promise<string>(resolve=>{
  //   setTimeout(()=>{
  //     resolve()
  //   },4000)})
  //   date$:Observable<Date>=new Observable(obs=>{
  //     setInterval(()=>{
  //       obs.next(new Date())
  //     },1000)
  //   })
  //   ngOnInit(){
  //     this.date$.subscribe(date=>{
  //       this.date=date
  //     })
  //   }
  // form:FormGroup
  // ngOnInit(){
  //   this.form=new FormGroup({
  //     email:new FormControl('', [Validators.email,Validators.required, MyValidators.restrictedEmail],MyValidators.uniqEmail),

  //     password:new FormControl(null, [Validators.minLength(6),Validators.required,]),
  //     address:new FormGroup({
  //       country:new FormControl('ru'),
  //       city:new FormControl('',Validators.required)
  //     }),

  //   skills:new FormArray([])
  //   } )
  // }
  // setCapital(){
  //   const cityMap={
  //     ru:'москва',
  //     by:'минск',
  //     ua:'киев',
  //   }
  //   const cityKey=this.form.get('address').get('country').value
  //   const city=cityMap[cityKey]
  //   this.form.patchValue({address:{city}})

  // }
  // addSkill(){
  //   const control=new FormControl('',Validators.required);
  //   (<FormArray>this.form.get('skills')).push(control)
  // }
  // submit(){
  //   const formData={...this.form.value}
  //   this.form.reset()

  // }
  // handleChange(){
  //   console.log()
  // }
  // appState="on"
  // constructor(private todosService:TodosService){

  // }
  // todos:Todo[]=[]
  // todoTitile=''
  // loading=false
  // ngOnInit(){
    // this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/posts?_limit=2').subscribe(response=>{
    //   this.todos=response
    // })
//     this.fetchTodos()
//   }
// addTodo(){
//   if(!this.todoTitle.trim()){
//     return
//   }
//   const newTodo:Todo={
//     title:this.todoTitile,
//     completed:false
//   }
//   this.todosService.addTodo().subscribe(todo=>{
//     this.todos.push(todo)
//     this.todoTitile=''
//   })

// }
// error=''
// fetchTodos(){
//   loading=true
//   this.todosService.fetchTodos().subscribe(response=>{
//       this.todos=response
//       loading=false
//     },error=>{
//       this.error=error.message
//     })
// }
// removeTodo(id:number){
//   this.todosService.removeTodo(id).subscribe(response=>{
//     this.todos=this.todos.filter(t=>t.id!==id)
//   })
// }
// completeTodo(id:number){
//   this.todosService.completeTodo(id).subscribe(response=>{
//     this.todos.find(t=>t.id===todo.id).completed=true
//   })
// }
  // modal=false
  @ViewChild(RefDirective,{static:false}) refDir:RefDirective
  constructor(private resolver:ComponentFactoryResolver,private title:Title,private meta:Meta,){
    const t=title.getTitle()
    title.setTitle("App component page")
    meta.addTags([{name:'keywords',content:'angular,google,appComponent'},{name:'description',content:'this is app component'},])
  }
  showModal(){
    const modalFactory=this.resolver.resolveComponentFactory(ModalComponent)
    this.refDir.containerRef.clear()
    const component=this.refDir.containerRef.createComponent(modalFactory)
    component.instance.title="Dyncamic title"
    component.instance.close.subscribe(()=>{
      this.refDir.containerRef.clear()
    })
  }
}
