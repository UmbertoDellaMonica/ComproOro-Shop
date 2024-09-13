import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComproOroLogoComponent } from './compro-oro-logo.component';

describe('ComproOroLogoComponent', () => {
  let component: ComproOroLogoComponent;
  let fixture: ComponentFixture<ComproOroLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComproOroLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComproOroLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
