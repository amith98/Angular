import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userForm!:FormGroup;

  ngOnInit() {
    this.userForm = new FormGroup({
      name : new FormControl(null,[Validators.required,Validators.minLength(3)]),
      password : new FormControl(null,[Validators.required,Validators.minLength(6)]),
      confirmPassword : new FormControl(null,Validators.required)
    });
  }

  get name() {
    return this.userForm.get('name');
  }

  get password() {
    return this.userForm.get('password');
  }
  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }

  onSubmit() {
    let passwordValue = this.userForm.value.password;
    let confirmPasswordValue = this.userForm.value.confirmPassword;
    
    if(passwordValue == confirmPasswordValue) {
      alert("Form submitted successfully!");
    } else {
      alert("Passwords do not match");
    }

  }
}
