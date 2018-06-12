import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingFiltersComponent } from './shoping-filters.component';

describe('ShopingFiltersComponent', () => {
  let component: ShopingFiltersComponent;
  let fixture: ComponentFixture<ShopingFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
