import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderListContainerComponent } from './order-list-container/order-list-container.component';
import { OrderFormPresentationComponent } from './order-form-container/order-form-presentation/order-form-presentation.component';
import { OrderListPresentationComponent } from './order-list-container/order-list-presentation/order-list-presentation.component';
import { OrderFormContainerComponent } from './order-form-container/order-form-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderService } from './order.service';

@NgModule({
  declarations: [
    OrderListContainerComponent,
    OrderFormContainerComponent,
    OrderFormPresentationComponent,
    OrderListPresentationComponent
    ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule
  ],
  providers:[OrderService]
})
export class OrderModule { }
