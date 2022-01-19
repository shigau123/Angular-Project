import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedin(){

    const regUemail=localStorage.getItem('uemail')
    const regUpass=localStorage.getItem('upass')
    const loginUser=localStorage.getItem('user')
    const loginUserpass=localStorage.getItem('userpass')
    if(regUemail===null){
      window.alert('login to view this page')
      return false
    }else if (regUemail===loginUser&&regUpass===loginUserpass){
            
            window.confirm('login sucessful, want to navigate through Dashboard')
            return true
          }else{
            window.alert('login failed')
            return false
          }
  
  }
  constructor() { }
}
