import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormContainerComponent } from './order-form-container.component';

describe('OrderFormContainerComponent', () => {
  let component: OrderFormContainerComponent;
  let fixture: ComponentFixture<OrderFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
