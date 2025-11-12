import { Component } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent {
  productName = "Laptop";
  productPrice = 299;
  imagePath = "./assets/images/laptop.jpg";
  productReview = "";

  onClick(productName:String): void {
    alert(productName+" added to cart!");

  }


}
