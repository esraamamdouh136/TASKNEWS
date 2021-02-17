import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsideComponentsComponent } from './leftside-components.component';

describe('LeftsideComponentsComponent', () => {
  let component: LeftsideComponentsComponent;
  let fixture: ComponentFixture<LeftsideComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftsideComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsideComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
