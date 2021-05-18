import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import {
  AddEmployee,
  DeleteEmployee,
  EditEmployee,
} from '../store/actions/employees.action';
import { SetMode } from '../store/actions/mode.action';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employees: Observable<any>;
  mode: Observable<any>;

  addEmployeeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  searchEmployeeForm = new FormGroup({
    searchName: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.employees = this.store.select('employees');
    this.mode = this.store.select('mode');
  }

  addEmployee() {
    this.store.dispatch(
      new AddEmployee(this.addEmployeeForm.controls.name.value)
    );
    this.addEmployeeForm.reset();
  }

  deleteEmployee(employee) {
    this.store.dispatch(new DeleteEmployee(employee));
  }

  editEmployee(i) {
    this.store.dispatch(new SetMode(i));
  }

  saveEmployee(editedValue, index) {
    this.store.dispatch(new EditEmployee(editedValue, index));
    this.dismissEmployee();
  }

  dismissEmployee() {
    this.store.dispatch(new SetMode(false));
  }
}
