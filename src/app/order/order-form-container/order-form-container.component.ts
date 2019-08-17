import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { OrderFormPresenterService } from './order-form-presenter/order-form-presenter.service';
import { Order } from '../order';
import { filter, switchMap } from 'rxjs/operators';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-form-container',
  templateUrl: './order-form-container.component.html',
  styleUrls: ['./order-form-container.component.scss']
})
export class OrderFormContainerComponent implements OnInit {
  public order$: Observable<Order> = this.route.paramMap.pipe(
    filter(params => params.has('id')),
    switchMap(params => this.orderService.getOrdersById(params.get('id'))),
  );
  public message: Subject<string> = new Subject();

  public message$: Observable<string>;



  constructor(private orderService: OrderService, private route: ActivatedRoute) {
    this.message$ = this.message.asObservable();
  }

  ngOnInit() { }

  public addOrder(order: Order): void {

    this.orderService.createOrder(order).subscribe(response => {
      if (response) {
        this.message.next('add');
      }
    });
  }

  public updateOrder(order: Order): void {

    this.orderService.updateOrder(order).subscribe(response => {
      if (response) {
        this.message.next('update');
      }
    });
  }


}
