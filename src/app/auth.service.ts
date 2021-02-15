@Injectable
({

})
export class AuthService{
  private isAuth=false
  login(){
   isAuth=true
  }
  logout(){
   isAuth=false
  }
isAuthenticated():Promise<boolean>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(this.isAuth)
    },1000)
  })
}
}
