import { ModeAction } from './store/actions/mode.action';

export interface AppState {
  readonly employees;
  readonly mode;
  readonly dailys;
}
