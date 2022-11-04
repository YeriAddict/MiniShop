import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './interfaces/order';
import { Observable, of } from 'rxjs';
import ordersData from '../assets/orders.json';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersUrl = 'assets/orders.json';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl)
  }

  getOrder(id: number): Observable<Order> {
    const order = ordersData.find(order => order.id === id)!;
    return of(order);
  }
}
