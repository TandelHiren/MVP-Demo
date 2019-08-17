import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormPresentationComponent } from './order-form-presentation.component';

describe('OrderFormPresentationComponent', () => {
  let component: OrderFormPresentationComponent;
  let fixture: ComponentFixture<OrderFormPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFormPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
