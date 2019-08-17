import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Order } from '../../order';
import { OrderListContainerComponent } from '../order-list-container.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list-presentation',
  templateUrl: './order-list-presentation.component.html',
  styleUrls: ['./order-list-presentation.component.scss']
})
export class OrderListPresentationComponent implements OnInit {


    /** This property is used for get data from container component */
    @Input() public set baseResponse(baseResponse: Order[]) {
      if (baseResponse) {
        this._baseResponse = baseResponse;
      }
    }
    public get baseResponse(): Order[] {
      return this._baseResponse;
    }
  private _baseResponse: Order[];
  
  @Output() public deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private orderContainer: OrderListContainerComponent, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }
  public deleteOrder(deleteId: number): void {
    debugger
    this.deleteEvent.emit(deleteId);
    this.orderContainer.message$.subscribe((response) => {
      if (response.toLowerCase() === 'delete') {
        this.toastr.success('Order delete successfully', 'Success');
      }
      this.router.navigate(['/order/view']);
    });
  }
}
