import { Component,OnInit,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  localData:any;
  subscription : Subscription;
  
  constructor(private http:HttpClient){}

   ngOnInit() {
    this.subscription = this.http.get('https://worksheet-library.mashupstack.com/books')
      .subscribe({
        next: data => this.localData = data,
        error: error => console.error(error)
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
