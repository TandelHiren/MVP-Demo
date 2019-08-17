import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-order-list-container',
  templateUrl: './order-list-container.component.html',
  styleUrls: ['./order-list-container.component.scss']
})
export class OrderListContainerComponent implements OnInit {
  public orderDataList$: Observable<Order[]> = this.orderService.getOrders();

  public message: Subject<string> = new Subject();

  public message$: Observable<string>;


  constructor(
    private orderService: OrderService
  ) {
    this.message$ = this.message.asObservable();
  }

  ngOnInit() {
  }
  public deleteOrder(orderId: number): void {
 //   debugger;
    this.orderService.deleteOrder(orderId).subscribe(response => {
      if (response) {
        this.message.next('delete');
        this.orderDataList$ = this.orderService.getOrders();
      }
    });
  }
}
