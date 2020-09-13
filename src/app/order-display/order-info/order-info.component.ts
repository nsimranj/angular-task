import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order-display.component';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {
  @Input() order: Order;

  total:number;

  constructor() { }

  ngOnInit() {
    //calculate the total amt of bill
    this.total = this.order.items.reduce((tot, x) => tot + (x.qty * x.price), 0);
  }

}
