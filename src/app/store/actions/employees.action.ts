import { Action } from '@ngrx/store';

export enum EmplyeesActionTypes {
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  DELETE_EMPLOYEE = 'DELETE_EMPLOYEE',
  EDIT_EMPLOYEE = 'EDIT_EMPLOYEE',
  GET_EMPLOYEES = 'GET_EMPLOYEES',
}

export class AddEmployee implements Action {
  readonly type = EmplyeesActionTypes.ADD_EMPLOYEE;
  constructor(public payload) {}
}

export class DeleteEmployee implements Action {
  readonly type = EmplyeesActionTypes.DELETE_EMPLOYEE;
  constructor(public payload) {}
}

export class EditEmployee implements Action {
  readonly type = EmplyeesActionTypes.EDIT_EMPLOYEE;
  constructor(public value, public index) {}
}

export class GetEmployees implements Action {
  readonly type = EmplyeesActionTypes.GET_EMPLOYEES;
  constructor(public payload) {}
}
export type EmployeesAction =
  | AddEmployee
  | DeleteEmployee
  | EditEmployee
  | GetEmployees;
