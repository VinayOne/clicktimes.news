import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GoogleTrendsComponent } from './google-trends.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe('GoogleTrendsComponent', () => {
  let component: GoogleTrendsComponent;
  let fixture: ComponentFixture<GoogleTrendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatProgressBarModule],
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
