import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComproOroFooterbarComponent } from './compro-oro-footerbar.component';

describe('ComproOroFooterbarComponent', () => {
  let component: ComproOroFooterbarComponent;
  let fixture: ComponentFixture<ComproOroFooterbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComproOroFooterbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComproOroFooterbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
