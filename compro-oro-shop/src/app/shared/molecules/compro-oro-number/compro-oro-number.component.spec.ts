import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComproOroNumberComponent } from './compro-oro-number.component';

describe('ComproOroNumberComponent', () => {
  let component: ComproOroNumberComponent;
  let fixture: ComponentFixture<ComproOroNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComproOroNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComproOroNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
