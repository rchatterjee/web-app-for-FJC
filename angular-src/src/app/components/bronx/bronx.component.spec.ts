/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BronxComponent } from './prepare.component';

describe('BronxComponent', () => {
  let component: BronxComponent;
  let fixture: ComponentFixture<BronxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BronxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BronxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
