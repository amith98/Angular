import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  createProduct(prod : any) : Observable<Product> {
    return this.http.post<Product>('https://worksheet-catalogue.mashupstack.com/products',prod);

  }

  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>('https://worksheet-catalogue.mashupstack.com/products');
  }

  getProductId(id : any) : Observable<Product>{
    return this.http.get<Product>(`https://worksheet-catalogue.mashupstack.com/products/${id}`);

  }

  deleteProduct(id : any) : Observable<Product> {
    return this.http.delete<Product> (`https://worksheet-catalogue.mashupstack.com/products/${id}`);
  }

  editProduct(id : any, prod : any) {
    return this.http.put<Product>(`https://worksheet-catalogue.mashupstack.com/products/${id}`,prod);
  }
}
