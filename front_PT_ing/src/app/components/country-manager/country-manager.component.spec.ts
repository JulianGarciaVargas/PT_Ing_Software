import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryManagerComponent } from './country-manager.component';

describe('CountryManagerComponent', () => {
  let component: CountryManagerComponent;
  let fixture: ComponentFixture<CountryManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
