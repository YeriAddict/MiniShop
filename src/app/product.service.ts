import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './interfaces/product';
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

  getProduct(id: number): Observable<Product> {
    const product = productsData.find(product => product.id === id)!;
    return of(product);
  }
}
