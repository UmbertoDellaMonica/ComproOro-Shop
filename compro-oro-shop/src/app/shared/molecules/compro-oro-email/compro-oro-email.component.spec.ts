import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComproOroEmailComponent } from './compro-oro-email.component';

describe('ComproOroEmailComponent', () => {
  let component: ComproOroEmailComponent;
  let fixture: ComponentFixture<ComproOroEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComproOroEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComproOroEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
