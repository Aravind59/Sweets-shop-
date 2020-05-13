import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetAddCartComponent } from './sweet-add-cart.component';

describe('SweetAddCartComponent', () => {
  let component: SweetAddCartComponent;
  let fixture: ComponentFixture<SweetAddCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetAddCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetAddCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
