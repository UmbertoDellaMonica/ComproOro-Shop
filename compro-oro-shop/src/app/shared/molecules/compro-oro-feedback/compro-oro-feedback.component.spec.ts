import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComproOroFeedbackComponent } from './compro-oro-feedback.component';

describe('ComproOroFeedbackComponent', () => {
  let component: ComproOroFeedbackComponent;
  let fixture: ComponentFixture<ComproOroFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComproOroFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComproOroFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
