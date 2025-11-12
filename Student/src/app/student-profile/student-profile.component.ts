import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
  studentName = "Varun";
  imagePath = "./assets/images/profile.jpg";
  favSubject = "";

  onClick(): void {
    alert("Profile viewed!");
  }

}
