import { ModeAction, ModeActionTypes } from '../actions/mode.action';

export function ModeReducer(state = false, action: ModeAction) {
  switch (action.type) {
    case ModeActionTypes.SET_MODE:
      return action.payload;
    default:
      return state;
  }
}
