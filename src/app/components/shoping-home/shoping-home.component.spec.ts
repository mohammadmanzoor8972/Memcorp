import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingHomeComponent } from './shoping-home.component';

describe('ShopingHomeComponent', () => {
  let component: ShopingHomeComponent;
  let fixture: ComponentFixture<ShopingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
