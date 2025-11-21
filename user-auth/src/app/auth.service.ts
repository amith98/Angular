import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.post<any>('https://worksheet-product.mashupstack.com/register',user);
  }

  login(credentials: any) : Observable<any> {
    return this.http.post<any>('https://worksheet-product.mashupstack.com/login',credentials);
  }

  logout() {
    const headers = this.getHeaders();
    localStorage.removeItem('token');
    return this.http.post('https://worksheet-product.mashupstack.com/logout',{headers});
  }
}
