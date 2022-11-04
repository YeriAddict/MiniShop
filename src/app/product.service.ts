import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './interfaces/product';
import productsData from '../assets/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
  }

  getProduct(id: number): Observable<Product> {
    const product = productsData.find(product => product.id === id)!;
    return of(product);
  }
}
