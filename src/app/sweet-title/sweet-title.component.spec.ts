import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetTitleComponent } from './sweet-title.component';

describe('SweetTitleComponent', () => {
  let component: SweetTitleComponent;
  let fixture: ComponentFixture<SweetTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
