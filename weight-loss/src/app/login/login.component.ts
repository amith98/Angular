import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userid:any;

   constructor(private router : Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token){
      this.router.navigateByUrl(`/index/${this.userid}`);
    } 
  }

  loginForm = new FormGroup ({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  login() {
    let loginEmail = this.loginForm.value.email;
    let loginPassword = this.loginForm.value.password;
    let loggedIn:boolean = false;
    const storedUserData = localStorage.getItem('usersData');
    let retrievedUsersData = storedUserData ? JSON.parse(storedUserData) : [];
    let retrievedUserDataLength = retrievedUsersData.length;
    if(retrievedUserDataLength != 0) {
      for(let i =0; i < retrievedUserDataLength; i++) {
        if((retrievedUsersData[i].email == loginEmail) && (retrievedUsersData[i].password == loginPassword)) {
          this.userid = retrievedUsersData[i].userId;
          loggedIn = true;
          localStorage.setItem('token','true');
          this.router.navigateByUrl(`/index/${this.userid}`);
          break;
        }
      }
    }
    if(!loggedIn) {
      alert("Invalid Email or Password");
    }
  

  }

  loadRegister() {
    this.router.navigateByUrl('/register');
  }
}
