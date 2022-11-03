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

  getOrder(id: number): Observable<Order> {
    const order = ordersData.find(order => order.id === id)!;
    return of(order);
  }
}
