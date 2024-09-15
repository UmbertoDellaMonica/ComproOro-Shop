import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComproOroCallButtonComponent } from './compro-oro-call-button.component';

describe('ComproOroButtonComponent', () => {
  let component: ComproOroCallButtonComponent;
  let fixture: ComponentFixture<ComproOroCallButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComproOroCallButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComproOroCallButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
