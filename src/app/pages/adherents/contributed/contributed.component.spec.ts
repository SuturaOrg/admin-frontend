/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContributedComponent } from './contributed.component';

describe('ContributedComponent', () => {
  let component: ContributedComponent;
  let fixture: ComponentFixture<ContributedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
