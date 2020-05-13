import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetCardsListComponent } from './sweet-cards-list.component';

describe('SweetCardsListComponent', () => {
  let component: SweetCardsListComponent;
  let fixture: ComponentFixture<SweetCardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetCardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
