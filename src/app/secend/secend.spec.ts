import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secend } from './secend';

describe('Secend', () => {
  let component: Secend;
  let fixture: ComponentFixture<Secend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
