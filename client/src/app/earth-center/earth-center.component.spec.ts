import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthCenterComponent } from './earth-center.component';

describe('EarthCenterComponent', () => {
  let component: EarthCenterComponent;
  let fixture: ComponentFixture<EarthCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarthCenterComponent]
    });
    fixture = TestBed.createComponent(EarthCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
