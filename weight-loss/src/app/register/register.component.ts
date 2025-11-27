import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  count:number=0;
  userLocalData:any[]=[];

   constructor(private router: Router) {}

  registerForm = new FormGroup({
    name : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  register() {
    const storedUserData = localStorage.getItem('usersData');
    let retrievedUsersData = storedUserData ? JSON.parse(storedUserData) : [];
    if(retrievedUsersData.length == 0) {
      this.count = 1;
      const registerDetails = {
      userId: this.count,
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      userWeightData: []
      };
      this.userLocalData.push(registerDetails);
      localStorage.setItem('usersData',JSON.stringify(this.userLocalData));
      this.router.navigate(['']);
    }else {
      this.count = retrievedUsersData.length;
      this.count++;
      const registerDetails = {
      userId: this.count,
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      userWeightData: []
      };
      this.userLocalData.push(registerDetails);
      localStorage.setItem('usersData',JSON.stringify(this.userLocalData));
      this.router.navigate(['']);

    }
    console.log(localStorage.getItem('usersData'));
    //localStorage.removeItem('usersData');
  }

  loadLogin() {
    this.router.navigate(['']);
    console.log(localStorage.getItem('usersData'));
  }

}
