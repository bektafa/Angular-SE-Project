import { Action } from '@ngrx/store';

export enum DailyActionTypes {
  ADD_DAILY = 'ADD_DAILY',
  DELETE_DAILY = 'DELETE_DAILY',
  EDIT_DAILY = 'EDIT_DAILY',
  GET_DAILY = 'GET_DAILY',
}

export class AddDayily implements Action {
  readonly type = DailyActionTypes.ADD_DAILY;
  constructor(public name, public time, public onTime) {}
}

export class DeleteDaily implements Action {
  readonly type = DailyActionTypes.DELETE_DAILY;
  constructor(public index) {}
}

export class EditDaily implements Action {
  readonly type = DailyActionTypes.EDIT_DAILY;
  constructor(public index, public name, public time, public onTime) {}
}
export class GetDaily implements Action {
  readonly type = DailyActionTypes.GET_DAILY;
  constructor(public payload) {}
}

export type DailysAction = AddDayily | DeleteDaily | EditDaily | GetDaily;
