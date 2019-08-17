import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Order } from './order';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public serviceUrl = 'http://localhost:3000/';

  public updateData: BehaviorSubject<Order> = new BehaviorSubject<Order>(new Order());

  constructor(
    private httpClient: HttpClient
  ) { }
  /**
   * Gets all the orders from server usig get method of http client
   * @returns all the orders data observable
   */
  public getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.serviceUrl + 'orderdetails');
  }
  public sendData(data: Order): void {
    this.updateData.next(data);
  }

  public getData(): Observable<Order> {
    return this.updateData.asObservable();
  }
  
  public getOrdersById(id: string): Observable<Order> {
    return this.httpClient.get<Order>(this.serviceUrl + 'orderdetails/' + id);
  }
  /**
   * Create a new order using post method of http client
   */
  public createOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.serviceUrl + 'orderdetails'}`, order);
  }

  /**
   * Updates exsiting order
   * @param order it set the id for update order
   */
  public updateOrder(order: Order): Observable<Order> {
    return this.httpClient.put<Order>(`${this.serviceUrl + 'orderdetails'}/${order.id}`, order);
  }

  /**
   * Delete a perticular order using the order id
   * @param orderId it set the id for delete order
   */
  public deleteOrder(orderId: number): Observable<Order[]> {
    return this.httpClient.delete<Order[]>(`${this.serviceUrl + 'orderdetails'}/${orderId}`);
  }


}
