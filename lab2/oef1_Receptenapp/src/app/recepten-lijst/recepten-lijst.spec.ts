import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptenLijst } from './recepten-lijst';

describe('ReceptenLijst', () => {
  let component: ReceptenLijst;
  let fixture: ComponentFixture<ReceptenLijst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptenLijst]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptenLijst);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
