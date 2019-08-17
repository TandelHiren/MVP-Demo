import { TestBed } from '@angular/core/testing';

import { OrderFormPresenterService } from './order-form-presenter.service';

describe('OrderFormPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderFormPresenterService = TestBed.get(OrderFormPresenterService);
    expect(service).toBeTruthy();
  });
});
