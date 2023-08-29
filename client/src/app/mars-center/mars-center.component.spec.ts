import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsCenterComponent } from './mars-center.component';

describe('MarsCenterComponent', () => {
  let component: MarsCenterComponent;
  let fixture: ComponentFixture<MarsCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarsCenterComponent]
    });
    fixture = TestBed.createComponent(MarsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
