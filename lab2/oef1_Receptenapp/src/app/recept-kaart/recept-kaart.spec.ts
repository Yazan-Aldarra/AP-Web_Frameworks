import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptKaart } from './recept-kaart';

describe('ReceptKaart', () => {
  let component: ReceptKaart;
  let fixture: ComponentFixture<ReceptKaart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptKaart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptKaart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
