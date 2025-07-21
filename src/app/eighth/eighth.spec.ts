import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eighth } from './eighth';

describe('Eighth', () => {
  let component: Eighth;
  let fixture: ComponentFixture<Eighth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eighth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eighth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
