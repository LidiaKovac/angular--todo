import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSubtitleComponent } from './date-subtitle.component';

describe('DateSubtitleComponent', () => {
  let component: DateSubtitleComponent;
  let fixture: ComponentFixture<DateSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateSubtitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
