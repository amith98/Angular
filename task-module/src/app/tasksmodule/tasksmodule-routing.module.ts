import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksmoduleComponent } from './tasksmodule.component';

const routes: Routes = [
  {path: '',component: TasksmoduleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksmoduleRoutingModule { }
