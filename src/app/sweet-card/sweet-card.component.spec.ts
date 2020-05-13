import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetCardComponent } from './sweet-card.component';

describe('SweetCardComponent', () => {
  let component: SweetCardComponent;
  let fixture: ComponentFixture<SweetCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
