import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public gotoreg:Router) { }

  loginForm=new FormGroup({
    uemail:new FormControl("",[Validators.required,Validators.pattern(''),Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
    upass:new FormControl("",[Validators.required,Validators.pattern(''),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
  })

     get uemail(){
       return this.loginForm.get("uemail");
     }
     get upass(){
       return this.loginForm.get("upass");
     }
     login(){
       console.log(this.loginForm.value);
       localStorage.setItem("uemail",JSON.stringify(this.loginForm.value.uemail))
       localStorage.setItem("upass",JSON.stringify(this.loginForm.value.upass))
       this.gotoreg.navigate(["Registration"])
     }
  
  ngOnInit(): void {
  }

}
