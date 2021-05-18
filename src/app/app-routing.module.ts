import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyScrumComponent } from './daily-scrum/daily-scrum.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesListComponent },
  { path: 'scrum', component: DailyScrumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
