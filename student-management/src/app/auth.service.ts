import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  private getHeaders() : HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  register(user : any) : Observable<any> {
    return this.http.post<any>('https://worksheet-student.mashupstack.com/register',user);
  }

  login(credentials: any) : Observable<any> {
    return this.http.post<any>('https://worksheet-student.mashupstack.com/login',credentials);
  }

  logout() {
    const headers = this.getHeaders();
    localStorage.removeItem('token');
    return this.http.post('https://worksheet-student.mashupstack.com/logout',{headers});
  }

  getStudentDetails() : Observable<Student[]> {
    const headers = this.getHeaders();
    return this.http.get<Student[]>('https://worksheet-student.mashupstack.com/students',{headers});
  }
}
