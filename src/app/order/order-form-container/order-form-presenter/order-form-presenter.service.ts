import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Order } from '../../order';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class OrderFormPresenterService {
 /** This is used for subscribing the value of subject add */
 public add$: Observable<Order>;
 /** This is used for add camelCaseModelName object */
 private add: Subject<Order> = new Subject();
  constructor(private fb: FormBuilder, ) {
    this.add$ = this.add.asObservable();
   }
  
  public buildForm(): FormGroup {
    return this.fb.group({
        id: [''],
        name: ['', Validators.compose([Validators.required])],
        address: ['', Validators.compose([Validators.required])],
        contactno: ['', Validators.compose([Validators.required])],
        orderTime: ['', Validators.compose([Validators.required])]
    });
}
public bindControlValue(orderForm: FormGroup, order: Order): FormGroup {
  if (order) {
      orderForm.patchValue(order);
  }
  return orderForm;
}
public saveOrder(orderForm: FormGroup): void {
  if (orderForm.valid) {
      let order: Order = new Order();
      order = orderForm.getRawValue();
      this.add.next(order);
  } else {
  }
}
}
