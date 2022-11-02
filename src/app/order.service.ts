import { Injectable } from '@angular/core';
import { Order } from './interfaces/order';
import { Observable, of } from 'rxjs';
import ordersData from './data/orders.json';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() {}

  getOrders(): Observable<Order[]> {
    const orders = of(ordersData);
    return orders;
  }
}
