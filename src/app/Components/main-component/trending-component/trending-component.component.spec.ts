import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingComponentComponent } from './trending-component.component';

describe('TrendingComponentComponent', () => {
  let component: TrendingComponentComponent;
  let fixture: ComponentFixture<TrendingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
