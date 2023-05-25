import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWorkoutPageComponent } from './select-workout-page.component';

describe('SelectWorkoutComponent', () => {
  let component: SelectWorkoutPageComponent;
  let fixture: ComponentFixture<SelectWorkoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectWorkoutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectWorkoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
