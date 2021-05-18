import { DailyActionTypes } from '../actions/dailys.action';

export function DailysReducer(
  state = [
    { name: 'John Doe', time: '8:00', onTime: 'Yes' },
    { name: 'Chloe Doe', time: '9:00', onTime: 'No' },
    { name: 'John Smith', time: '8:30', onTime: 'Yes' },
  ],
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
    default:
      return state;
  }
}
