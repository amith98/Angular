import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  textColorRed = "red";
  textColorGreen = "green";
  availableProducts = true;
  productList:any[] = [
    {name: 'Milk', price: 20, onsale:true},
    {name: 'Bread', price: 55, onsale:true },
    {name: 'Torch', price: 600, onsale:false}
  ];
}
