import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComproOroMapComponent } from './compro-oro-map.component';

describe('ComproOroMapComponent', () => {
  let component: ComproOroMapComponent;
  let fixture: ComponentFixture<ComproOroMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComproOroMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComproOroMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
