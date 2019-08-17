import { TestBed } from '@angular/core/testing';

import { OrderListPresenterService } from './order-list-presenter.service';

describe('OrderListPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderListPresenterService = TestBed.get(OrderListPresenterService);
    expect(service).toBeTruthy();
  });
});
