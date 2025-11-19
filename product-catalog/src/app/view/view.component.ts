import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute,Route,Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  allProducts: Product[] = [];


  constructor(private productService : ProductService,private route:ActivatedRoute,private router:Router){
    this.productService.getAllProducts().subscribe({
      next: data => this.allProducts = data,
      error: error => console.log(error)
    });
  }
  
  edit(id:any) {
    console.log(id);
    this.router.navigate(['edit',id]);

  }


  delete(id:any) {
    this.productService.deleteProduct(id).subscribe({
      next : data => {
      this.productService.getAllProducts().subscribe({
      next: data => this.allProducts = data,
      error: error => console.log(error)
    });

      }
    });
  }


}
