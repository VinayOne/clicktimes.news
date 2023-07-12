import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EntertainmentComponent } from './entertainment.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('EntertainmentComponent', () => {
  let component: EntertainmentComponent;
  let fixture: ComponentFixture<EntertainmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule],
      declarations: [EntertainmentComponent]
    });
    fixture = TestBed.createComponent(EntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
