import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksmoduleRoutingModule } from './tasksmodule-routing.module';
import { TasksmoduleComponent } from './tasksmodule.component';
import { TasklistcomponentComponent } from './tasklistcomponent/tasklistcomponent.component';


@NgModule({
  declarations: [
    TasksmoduleComponent,
    TasklistcomponentComponent
  ],
  imports: [
    CommonModule,
    TasksmoduleRoutingModule
  ]
})
export class TasksmoduleModule { }
