import { Component, OnInit } from '@angular/core';
import { Order } from '../interfaces/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService: OrderService) {}

  orders: Order[] = [];  

  getOrders(): void {
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }

  ngOnInit(): void {
    this.getOrders();
  }

}
