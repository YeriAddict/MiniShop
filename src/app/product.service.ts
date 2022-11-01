import { Injectable } from '@angular/core';
import { Product } from './interfaces/product';
import { Observable, of } from 'rxjs';
import productsData from './data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    const products = of(productsData);
    return products;
  }
}
