import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCardPlaceholderComponent } from './horizontal-card-placeholder.component';

describe('HorizontalCardPlaceholderComponent', () => {
  let component: HorizontalCardPlaceholderComponent;
  let fixture: ComponentFixture<HorizontalCardPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalCardPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalCardPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
