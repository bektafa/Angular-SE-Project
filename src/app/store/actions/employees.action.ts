import { Action } from '@ngrx/store';

export enum EmplyeesActionTypes {
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  DELETE_EMPLOYEE = 'DELETE_EMPLOYEE',
  EDIT_EMPLOYEE = 'EDIT_EMPLOYEE',
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

export type EmployeesAction = AddEmployee | DeleteEmployee | EditEmployee;
