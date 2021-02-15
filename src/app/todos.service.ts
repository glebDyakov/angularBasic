export interface Todo{
  completed:boolean
  title:string
  id?:string
}
@Injectable({
  providedIn:'root'
}) export class TodosService{
  constructor(private http:HttpClient){

  }
  addTodo(todo:Todo):Observable<Todo>{
    const headers=new HttpHeaders({
      'MyCustomHeader':Math.random().toString()
    })

    })
  return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos',todo,
  {
    headers
  }) //.subscribe(todo=>{
  //   this.todos.push(todo)
  //   this.todoTitile=''
  // })
  }
  fetchTodos():Observable<Todo[]>{
    let params=new HttpParams()
    params.append('_limit','4')
    params =params.append('custom','anything')
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2',{
      // params:new HttpParams().set('_limit','3')
      params,
      observe:'response'
    }).pipe(map(response=>{
      return response.body
    },delay(1500),catchError(error=>{
      return throwError(error)
    }))
  }
  removeTodo(id:number):Observable<any>{
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`,{
      observe:'events'
    }).pipe(tap(event=>{
      if(event.type===HttpEventType.Sent){

      }
    }))
  }
  completeTodo(id:number):Observable<Todo>{
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`,{
      completed:true
    },{
      responseType:'json'
    })
  }
}
