import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListContainerComponent } from './order-list-container/order-list-container.component';
import { OrderFormContainerComponent } from './order-form-container/order-form-container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full',
  },
  {
    path: 'view',
    component: OrderListContainerComponent,
  },
  {
    path: 'create',
    component: OrderFormContainerComponent,
  },
  {
    path: 'edit/:id',
    component: OrderFormContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
