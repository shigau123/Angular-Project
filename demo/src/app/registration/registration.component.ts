import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(public gotodash:Router) { }

  regForm=new FormGroup({
    user:new FormControl("",[Validators.required,Validators.pattern(''),Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
    userpass:new FormControl("",[Validators.required,Validators.pattern(''),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  })
  get user(){
    return this.regForm.get("user");
  }
  get userpass(){
    return this.regForm.get("userpass");
  }
  reg(){
    console.log(this.regForm.value);
    localStorage.setItem("user",JSON.stringify(this.regForm.value.user))
       localStorage.setItem("userpass",JSON.stringify(this.regForm.value.userpass))
       this.gotodash.navigate(["Dashboard"])
        
  }
  

  ngOnInit(): void {
  }

}
