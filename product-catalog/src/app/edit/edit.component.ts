import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  id! : string;
  product : any;

  constructor(private productService: ProductService,private route: ActivatedRoute,private router: Router){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductId(this.id).subscribe({
      next: data => {
        this.product = data;
        this.editForm.patchValue({
          prodId : this.product.id,
          name : this.product.name,
          price : this.product.price,
          category : this.product.price,
          quantity : this.product.quantity
        });
      }
    });
  }
    editForm = new FormGroup({
      prodId : new FormControl('',Validators.required),
      name : new FormControl('',Validators.required),
      price : new FormControl('',Validators.required),
      category : new FormControl('',Validators.required),
      quantity : new FormControl('',Validators.required)
    });

    get prodId() {
      return this.editForm.get('prodId');
    }
    get name() {
      return this.editForm.get('name');
    }
    get price() {
      return this.editForm.get('price');
    }
    get category() {
      return this.editForm.get('category');
    }
    get quantity() {
      return this.editForm.get('quantity');
    }


    editProduct() {
      const product = {
        id : this.editForm.value.prodId,
        name : this.editForm.value.name,
        price : this.editForm.value.price,
        category : this.editForm.value.category,
        quantity : this.editForm.value.quantity
      }

      this.id = this.route.snapshot.params['id'];
      this.productService.editProduct(this.id,product).subscribe({
        next : data => {
          this.router.navigate(['view']);
        }
      });
    }


}
