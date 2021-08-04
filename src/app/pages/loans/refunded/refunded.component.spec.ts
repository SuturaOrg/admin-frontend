/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RefundedComponent } from './refunded.component';

describe('RefundedComponent', () => {
  let component: RefundedComponent;
  let fixture: ComponentFixture<RefundedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
