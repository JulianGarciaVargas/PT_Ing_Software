import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCoinComponent } from './country-coin.component';

describe('CountryCoinComponent', () => {
  let component: CountryCoinComponent;
  let fixture: ComponentFixture<CountryCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryCoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
