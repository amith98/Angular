import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksmoduleComponent } from './tasksmodule.component';

describe('TasksmoduleComponent', () => {
  let component: TasksmoduleComponent;
  let fixture: ComponentFixture<TasksmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksmoduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
