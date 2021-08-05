/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ownsComponent } from './owns.component';

describe('ownsComponent', () => {
  let component: ownsComponent;
  let fixture: ComponentFixture<ownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
