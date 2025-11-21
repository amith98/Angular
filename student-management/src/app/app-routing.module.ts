import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentListComponent } from './student-list/student-list.component';
import { isLoggedInGuard } from './auth.guard';

const routes: Routes = [
{path : '',component: LoginComponent},
{path : 'register',component: RegisterComponent},
{path : 'studentlist', component : StudentListComponent,canActivate:[isLoggedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
