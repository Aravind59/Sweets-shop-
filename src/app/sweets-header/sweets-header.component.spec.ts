import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetsHeaderComponent } from './sweets-header.component';

describe('SweetsHeaderComponent', () => {
  let component: SweetsHeaderComponent;
  let fixture: ComponentFixture<SweetsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
