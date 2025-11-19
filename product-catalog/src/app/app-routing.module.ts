import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path : '',redirectTo:'view', pathMatch:'full'},
  {path : 'view', component:ViewComponent},
  {path : 'edit/:id', component:EditComponent},
  {path : 'create', component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
