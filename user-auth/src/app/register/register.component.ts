import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private authService : AuthService, private router: Router) {}

  registerForm = new FormGroup({
    name : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  register() {
    const user = {
      user_name : this.registerForm.value.name,
      email : this.registerForm.value.email,
      password : this.registerForm.value.password
    };
    this.authService.register(user).subscribe({
      next : data => {
        this.router.navigate(['']);
      }
    });
  }

  loadLogin() {
    this.router.navigate(['']);
  }

}
