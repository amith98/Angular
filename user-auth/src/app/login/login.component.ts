import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService : AuthService,private router : Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token) {
      this.router.navigate(['dashboard']);
    }
  }

  loginForm = new FormGroup ({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  login() {
    const cred = {
      email : this.loginForm.value.email,
      password : this.loginForm.value.password
    };
    this.authService.login(cred).subscribe({
      next : res => {
        localStorage.setItem('token',res.token);
        this.router.navigateByUrl('dashboard');
      }
    });

  }

  loadRegister() {
    this.router.navigateByUrl('register');
  }

}
