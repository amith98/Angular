import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Student } from '../student';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  studentData : Student[] = [];

  constructor(private authService : AuthService,private router: Router) {

    this.authService.getStudentDetails().subscribe({
      next : res => {
        this.studentData = res;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }

}
