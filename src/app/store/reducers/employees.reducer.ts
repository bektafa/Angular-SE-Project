import {
  EmployeesAction,
  EmplyeesActionTypes,
  GetEmployees,
} from '../actions/employees.action';

export function EmployeesReducer(
  state = [],
  action: EmployeesAction
) {
  switch (action.type) {
    case EmplyeesActionTypes.ADD_EMPLOYEE:
      return [...state, {name: action.payload}];
    case EmplyeesActionTypes.DELETE_EMPLOYEE:
      return state.filter((employee) => employee !== action.payload);
    case EmplyeesActionTypes.EDIT_EMPLOYEE:
      return state.map((el, i) => (i === action.index ? {...el, name: action.value} : el));
    case EmplyeesActionTypes.GET_EMPLOYEES:
      return [...action.payload];
    default:
      return state;
  }
}
