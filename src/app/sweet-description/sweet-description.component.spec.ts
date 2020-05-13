import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetDescriptionComponent } from './sweet-description.component';

describe('SweetDescriptionComponent', () => {
  let component: SweetDescriptionComponent;
  let fixture: ComponentFixture<SweetDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
