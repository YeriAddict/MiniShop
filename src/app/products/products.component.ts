import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) {}

  products: Product[] = [];  

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
