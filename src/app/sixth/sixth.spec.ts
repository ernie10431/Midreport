import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sixth } from './sixth';

describe('Sixth', () => {
  let component: Sixth;
  let fixture: ComponentFixture<Sixth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sixth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sixth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
