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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

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
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      employees: EmployeesReducer,
      mode: ModeReducer,
      dailys: DailysReducer,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
