import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
   contact = {
    name: '',
    email: null,
  };

  onSubmit(formData: any) {
    console.log('Form submitted:', formData);
  }
}
