import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ninth } from './ninth';

describe('Ninth', () => {
  let component: Ninth;
  let fixture: ComponentFixture<Ninth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ninth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ninth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
