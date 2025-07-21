import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forth } from './forth';

describe('Forth', () => {
  let component: Forth;
  let fixture: ComponentFixture<Forth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
