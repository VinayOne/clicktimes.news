import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SportsComponent } from './sports.component';
import { SharedModule } from '../../shared/shared.module';

describe('SportsComponent', () => {
  let component: SportsComponent;
  let fixture: ComponentFixture<SportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule],
      declarations: [SportsComponent]
    });
    fixture = TestBed.createComponent(SportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
