import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(private productService: ProductService,private route: ActivatedRoute,private router: Router){}

    createForm = new FormGroup({
      name : new FormControl('',Validators.required),
      price : new FormControl('',Validators.required),
      category : new FormControl('',Validators.required),
      quantity : new FormControl('',Validators.required)
    });

    get name() {
      return this.createForm.get('name');
    }
    get price() {
      return this.createForm.get('price');
    }
    get category() {
      return this.createForm.get('category');
    }
    get quantity() {
      return this.createForm.get('quantity');
    }

    createProduct() {
       const product = {
        name : this.createForm.value.name,
        price : this.createForm.value.price,
        category : this.createForm.value.category,
        quantity : this.createForm.value.quantity
      }

      this.productService.createProduct(product).subscribe({
        next: data => {
          this.router.navigateByUrl('view');
        }
      });
    }

}
