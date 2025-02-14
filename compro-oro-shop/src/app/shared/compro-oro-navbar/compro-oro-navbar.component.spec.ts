import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComproOroNavbarComponent } from './compro-oro-navbar.component';

describe('ComproOroNavbarComponent', () => {
  let component: ComproOroNavbarComponent;
  let fixture: ComponentFixture<ComproOroNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComproOroNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComproOroNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
