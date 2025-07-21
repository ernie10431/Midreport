import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiologPage } from './diolog-page';

describe('DiologPage', () => {
  let component: DiologPage;
  let fixture: ComponentFixture<DiologPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiologPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiologPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
