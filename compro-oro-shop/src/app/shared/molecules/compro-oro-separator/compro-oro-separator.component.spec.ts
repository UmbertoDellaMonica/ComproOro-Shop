import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComproOroSeparatorComponent } from './compro-oro-separator.component';

describe('ComproOroSeparatorComponent', () => {
  let component: ComproOroSeparatorComponent;
  let fixture: ComponentFixture<ComproOroSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComproOroSeparatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComproOroSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
