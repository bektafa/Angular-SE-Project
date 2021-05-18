import { Action } from '@ngrx/store';

export enum ModeActionTypes {
  SET_MODE = 'SET_MODE',
}

export class SetMode implements Action {
  readonly type = ModeActionTypes.SET_MODE;
  constructor(public payload) {}
}

export type ModeAction = SetMode;
