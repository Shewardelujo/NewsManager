import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalPageCardComponent } from './horizontal-page-card.component';

describe('HorizontalPageCardComponent', () => {
  let component: HorizontalPageCardComponent;
  let fixture: ComponentFixture<HorizontalPageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalPageCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
