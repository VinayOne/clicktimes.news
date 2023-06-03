import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyComponent } from './technology.component';

describe('TechnologyComponent', () => {
  let component: TechnologyComponent;
  let fixture: ComponentFixture<TechnologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologyComponent]
    });
    fixture = TestBed.createComponent(TechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
