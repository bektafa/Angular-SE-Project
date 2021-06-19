import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fromEventPattern, Observable } from 'rxjs';
import { AppState } from '../app.state';
import {
  AddEmployee,
  DeleteEmployee,
  EditEmployee,
  GetEmployees,
} from '../store/actions/employees.action';
import { SetMode } from '../store/actions/mode.action';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employees: Observable<any>;
  mode: Observable<any>;
  URL: string = "http://localhost:3000/api/";

  addEmployeeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  searchEmployeeForm = new FormGroup({
    searchName: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>, private http: HttpClient) {}

  ngOnInit(): void {
    this.employees = this.store.select('employees');
    this.mode = this.store.select('mode');
    this.getEmployees();
  }

  getEmployees(){
    const headers = { 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json'}  
    this.http.get(this.URL + 'users' ,{'headers':headers}).toPromise().then((data:any)=>{
      this.store.dispatch(
        new GetEmployees(data)
      );
    })
  }

  addEmployee() {
    this.store.dispatch(
      new AddEmployee(this.addEmployeeForm.controls.name.value)
    );
    const headers = { 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json'}  
    const body=JSON.stringify({name:this.addEmployeeForm.controls.name.value});
    this.http.post(this.URL + 'users', body,{'headers':headers}).toPromise().then((data:any)=>{
      console.log(data)
    })
    this.addEmployeeForm.reset();
    
  }

  deleteEmployee(employee) {
    const headers = { 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json'}  
    this.http.delete(this.URL + 'users/' + employee._id ,{'headers':headers}).toPromise().then((data:any)=>{
      this.store.dispatch(new DeleteEmployee(employee));
    })
    
  }

  editEmployee(i) {
    this.store.dispatch(new SetMode(i));
  }

  saveEmployee(editedValue, index, employee) {
    const headers = { 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json'}  
    const body=JSON.stringify({name: editedValue});
    this.http.put(this.URL + 'users/' + employee._id , body, {'headers':headers}).toPromise().then((data:any)=>{
      this.store.dispatch(new EditEmployee(editedValue, index));
    this.dismissEmployee();
    })
  }

  dismissEmployee() {
    this.store.dispatch(new SetMode(false));
  }
}
