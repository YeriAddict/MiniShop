import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../interfaces/order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor() {}

  @Input() order?: Order;

  ngOnInit(): void {
  }

}
