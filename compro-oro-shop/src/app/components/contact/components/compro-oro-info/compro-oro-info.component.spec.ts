import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComproOroInfoComponent } from './compro-oro-info.component';

describe('ComproOroInfoComponent', () => {
  let component: ComproOroInfoComponent;
  let fixture: ComponentFixture<ComproOroInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComproOroInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComproOroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
