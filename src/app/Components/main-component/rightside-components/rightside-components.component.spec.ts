import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsideComponentsComponent } from './rightside-components.component';

describe('RightsideComponentsComponent', () => {
  let component: RightsideComponentsComponent;
  let fixture: ComponentFixture<RightsideComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightsideComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsideComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
