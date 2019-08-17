import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OrderFormPresenterService } from '../order-form-presenter/order-form-presenter.service';
import { Order } from '../../order';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { OrderFormContainerComponent } from '../order-form-container.component';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-order-form-presentation',
  templateUrl: './order-form-presentation.component.html',
  styleUrls: ['./order-form-presentation.component.scss'],
  viewProviders: [OrderFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderFormPresentationComponent implements OnInit {

  public orderForm: FormGroup;
  private _orderData: Order;
  @Output() add: EventEmitter<Order>;
  @Output() update: EventEmitter<Order>;
  private destroy: Subject<void>;

/**
 * Set & get order details
 */
@Input() set orderDetails(value: Order) {

    this._orderData = value;
    if (value) {
      this.orderForm = this.orderPresenter.
        bindControlValue(this.orderForm,
          this._orderData);
    }
  }

  get orderDetails(): Order {
    return this._orderData;
  }
  constructor(private orderPresenter: OrderFormPresenterService, private toastr: ToastrService,
              private orderContainer: OrderFormContainerComponent, private router: Router) {
    this.destroy = new Subject();
    this.add = new EventEmitter();
    this.update = new EventEmitter();
    this.orderForm = this.orderPresenter.buildForm();
  }

  ngOnInit() {
    this.orderPresenter.add$.pipe(takeUntil(this.destroy)).subscribe((order: Order) => {
      if (this.orderDetails) {
        this.update.emit(order);
      } else {
        this.add.emit(order);
      }
    });
  }
  public order(): void {

    this.orderPresenter.saveOrder(this.orderForm);
    this.orderContainer.message$.pipe(takeUntil(this.destroy)).subscribe((response) => {
      if (response.toLowerCase() === 'update') {
        this.toastr.success('Order Update Successfully', 'Success');
      } else {
        this.toastr.success('Order Successfully Submitted', 'Success');
      }
      this.router.navigate(['/order/view']);
    });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
