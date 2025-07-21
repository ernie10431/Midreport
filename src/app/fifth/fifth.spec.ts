import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fifth } from './fifth';

describe('Fifth', () => {
  let component: Fifth;
  let fixture: ComponentFixture<Fifth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fifth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fifth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
