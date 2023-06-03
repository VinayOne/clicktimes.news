import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleTrendsComponent } from './google-trends.component';

describe('GoogleTrendsComponent', () => {
  let component: GoogleTrendsComponent;
  let fixture: ComponentFixture<GoogleTrendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleTrendsComponent]
    });
    fixture = TestBed.createComponent(GoogleTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
