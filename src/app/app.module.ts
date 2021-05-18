import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { DailyScrumComponent } from './daily-scrum/daily-scrum.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeniComponent } from './meni/meni.component';
import { StoreModule } from '@ngrx/store';
import { EmployeesReducer } from './store/reducers/employees.reducer';
import { ModeReducer } from './store/reducers/mode.reducer';
import { SearchfilterPipe } from './searchfilter.pipe';
import { DailysReducer } from './store/reducers/dailys.reducer';
import { SearchfilterdailyPipe } from './searchfilterdaily.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    DailyScrumComponent,
    MeniComponent,
    SearchfilterPipe,
    SearchfilterdailyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      employees: EmployeesReducer,
      mode: ModeReducer,
      dailys: DailysReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
