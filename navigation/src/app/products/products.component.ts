import { Component,OnInit,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit,OnDestroy {
  localData:any = '';
  subscription: Subscription;
  

  constructor(private http:HttpClient) {}

  // ngOnInit(){
  //   this.subscription = this.http.get('https://worksheet-catalogue.mashupstack.com/products')
  //   .subscribe(data => this.localData = data );     
  // }

  //   ngOnInit() {
  //   this.subscription = this.http.get('https://worksheet-catalogue.mashupstack.com/products')
  //     .subscribe(data => this.localData = data,
  //       error => console.error(error));
  // }

   ngOnInit() {
    this.subscription = this.http.get('https://worksheet-catalogue.mashupstack.com/products')
      .subscribe({
        next: data => this.localData = data,
        error: error => console.error(error),
        complete: () => console.log('completed process')
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
