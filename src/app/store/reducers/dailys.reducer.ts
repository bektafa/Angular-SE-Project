import { DailyActionTypes } from '../actions/dailys.action';

export function DailysReducer(
  state = [],
  action
) {
  switch (action.type) {
    case DailyActionTypes.ADD_DAILY:
      return [
        ...state,
        { name: action.name, time: action.time, onTime: action.onTime },
      ];
    case DailyActionTypes.DELETE_DAILY:
      return state.filter((el, i) => i !== action.index);
    case DailyActionTypes.EDIT_DAILY:
      return state.map((el, i) =>
        i === action.index
          ? {
              ...el,
              name: action.name,
              time: action.time,
              onTime: action.onTime,
            }
          : el
      );
      case DailyActionTypes.GET_DAILY:
        return [...action.payload];
    default:
      return state;
  }
}
