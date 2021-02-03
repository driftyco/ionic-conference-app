import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormPage } from './order-form.page';

describe('OrderFormPage', () => {
  let component: OrderFormPage;
  let fixture: ComponentFixture<OrderFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
