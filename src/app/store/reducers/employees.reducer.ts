import {
  EmployeesAction,
  EmplyeesActionTypes,
} from '../actions/employees.action';

export function EmployeesReducer(
  state = ['John Doe', 'Chloe Doe', 'John Smith'],
  action: EmployeesAction
) {
  switch (action.type) {
    case EmplyeesActionTypes.ADD_EMPLOYEE:
      return [...state, action.payload];
    case EmplyeesActionTypes.DELETE_EMPLOYEE:
      return state.filter((employee) => employee !== action.payload);
    case EmplyeesActionTypes.EDIT_EMPLOYEE:
      return state.map((el, i) => (i === action.index ? action.value : el));
    default:
      return state;
  }
}
