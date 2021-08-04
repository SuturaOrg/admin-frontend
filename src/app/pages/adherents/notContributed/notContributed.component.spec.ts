/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotContributedComponent } from './notContributed.component';

describe('NotContributedComponent', () => {
  let component: NotContributedComponent;
  let fixture: ComponentFixture<NotContributedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotContributedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotContributedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
