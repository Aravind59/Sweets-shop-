import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetVariationComponent } from './sweet-variation.component';

describe('SweetVariationComponent', () => {
  let component: SweetVariationComponent;
  let fixture: ComponentFixture<SweetVariationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetVariationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
