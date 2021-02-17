import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodNewsComponent } from './good-news.component';

describe('GoodNewsComponent', () => {
  let component: GoodNewsComponent;
  let fixture: ComponentFixture<GoodNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
